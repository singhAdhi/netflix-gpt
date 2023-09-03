import React, { useEffect, useState } from "react";
import { options } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
  const [trailerid, setTrailerId] = useState("");
  useEffect(() => {
    movieData();
  }, []);
  const movieData = async () => {
    const respons = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const data = await respons.json();
    console.log(data);
    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    setTrailerId(trailer.key);
  };
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerid + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

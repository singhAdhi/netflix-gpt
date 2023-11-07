import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { movieKeySlice } from "../utils/keySlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Trailer = () => {
  const dispatch = useDispatch();
  let [key, setKey] = useState([]);
  let { id } = useParams();
  const nowPopular = useSelector((store) => store.key?.keyData);
  const movieKey = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    let data = await response.json();

    const trailers = data.results.filter((result) => result.type === "Trailer");

    if (trailers.length > 0) {
      setKey(trailers[0].key);
    } else {
      setKey("");
    }
    dispatch(movieKeySlice(data.results));
  };
  useEffect(() => {
    movieKey();
  }, []);
  console.log(key);
  return (
    <div className="bg-black h-[100vh]">
      {key && (
        <iframe
          src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          className="w-3/4 aspect-auto m-auto h-[80vh] py-10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
      <Link to="/browse">
        <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default Trailer;

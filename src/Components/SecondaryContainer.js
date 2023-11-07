import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlay = useSelector((store) => store.movie?.nowPlayingMovie);
  const nowTrending = useSelector((store) => store.movie?.trendingMovie);
  const nowPopular = useSelector((store) => store.movie?.popularMovie);
  const nowSeries = useSelector((store) => store.movie?.trendingSeries);
  console.log(nowSeries);
  return (
    <div>
      {nowPlay && nowTrending && nowPopular && nowSeries && (
        <div className="bg-black">
          <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
            <MovieList title={"Now Playing"} list={nowPlay} />
            <MovieList title={"Upcoming Movies"} list={nowSeries} />
            <MovieList title={"Trending"} list={nowTrending} />
            <MovieList title={"Popular"} list={nowPopular} />

            <MovieList title={"Horror"} list={nowPlay} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;

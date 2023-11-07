import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ list, title }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-auto one">
        <div className="flex">
          {list.map((current) => {
            return (
              <Link key={current.id} to={`/trailer/${current.id}`}>
                <MovieCard posterPath={current.poster_path} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

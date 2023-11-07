import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4 transform scale-90 hover:scale-100 transition-transform duration-300 cursor-pointer">
      <img src={IMG_CDN + posterPath} alt="" />
    </div>
  );
};

export default MovieCard;

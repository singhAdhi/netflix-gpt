import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "../Hooks/useNowPlayingMovie";
import useTrendingMovie from "../Hooks/useTrendingMovie";
import usePopularMovie from "../Hooks/usePopularMovie";
import useTrendingSeries from "../Hooks/useTrendingSeries";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const selector = useSelector((store) => store.gpt?.showGptSearch);
  useNowPlayingMovie();
  useTrendingMovie();
  usePopularMovie();
  useTrendingSeries();
  return (
    <div className="overflow-x-hidden">
      <Header />
      {selector ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

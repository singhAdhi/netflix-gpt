import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingMovie } from "../utils/movieSlice";
const useTrendingMovie = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    let data = await response.json();
    dispatch(addTrendingMovie(data?.results));
  };
  useEffect(() => {
    getData();
  }, []);
};
export default useTrendingMovie;

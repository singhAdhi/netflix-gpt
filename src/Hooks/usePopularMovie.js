import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";
const usePopularMovie = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    let data = await response.json();
    dispatch(addPopularMovie(data?.results));
  };
  useEffect(() => {
    getData();
  }, []);
};
export default usePopularMovie;

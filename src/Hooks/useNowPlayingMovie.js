import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  const apiCall = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    let data = await response.json();
    dispatch(addMovie(data?.results));
    console.log(data.results);
  };
  useEffect(() => {
    apiCall();
  }, []);
};
export default useNowPlayingMovie;

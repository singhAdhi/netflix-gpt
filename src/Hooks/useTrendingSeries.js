import { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingSeries } from "../utils/movieSlice";
const useTrendingSeries = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    let data = await response.json();
    dispatch(addTrendingSeries(data?.results));
  };
  useEffect(() => {
    getData();
  }, []);
};
export default useTrendingSeries;

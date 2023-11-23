import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMoviesData } from "../utilts/Store/movieDataSlice";
import { useEffect } from "react";
import { API_OPTION, TOP_RATED } from "../utilts/conts";

const useTopRatedHooks = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => {
    return store.movieData.topRatedMovieData;
  });
  useEffect(() => {
    !topRatedMovies && fetchTopRatedMovieData();
    // if (topRatedMovies) {
    //   return;
    // } else {
    //   fetchTopRatedMovieData();
    // }
  }, []);
  const fetchTopRatedMovieData = async () => {
    const data = await fetch(TOP_RATED, API_OPTION);
    const json = await data.json();
    dispatch(addTopRatedMoviesData(json.results));
  };
};

export default useTopRatedHooks;

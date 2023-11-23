import { useDispatch, useSelector } from "react-redux";
import { API_OPTION, UPCOMING_MOVIES } from "../utilts/conts";
import { useEffect } from "react";
import { addPopularMovieData } from "../utilts/Store/movieDataSlice";
const useUpcomingMovieHook = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => {
    return store.movieData.popularMoviesData;
  });
  useEffect(() => {
    !upComingMovies && fetchData();
    // if (upComingMovies) {
    //   return;
    // } else {
    //   fetchData();
    // }
  }, []);
  const fetchData = async () => {
    const data = await fetch(UPCOMING_MOVIES, API_OPTION);
    const json = await data.json();
    dispatch(addPopularMovieData(json.results));
  };
};
fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  API_OPTION
);
export default useUpcomingMovieHook;

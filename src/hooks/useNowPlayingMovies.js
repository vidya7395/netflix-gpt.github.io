import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMoviesData } from "../utilts/Store/movieDataSlice";
import { useEffect } from "react";
import { API_OPTION, NOW_PLAYING_MOVIE_DATA } from "../utilts/conts";

const useNowPlayingHooks = () => {
  const nowPlayingMovies = useSelector((store) => {
    return store.movieData.nowPlayingMovieData;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    !nowPlayingMovies && fetchNowPlayingMovieData();

    // if (nowPlayingMovies) {
    //   return;
    // } else {
    //   fetchNowPlayingMovieData();
    // }
  }, []);
  const fetchNowPlayingMovieData = async () => {
    const data = await fetch(NOW_PLAYING_MOVIE_DATA, API_OPTION);
    const json = await data.json();
    dispatch(addNowPlayingMoviesData(json.results));
  };
};

export default useNowPlayingHooks;

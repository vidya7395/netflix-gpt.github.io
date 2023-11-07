import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utilts/conts";
import { addTrailerData } from "../utilts/Store/movieDataSlice";

const useVideoBackgroundHook = (id) => {
  const dispatch = useDispatch();
  const fetchMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTION
    );
    const json = await data.json();
    const officialTrailer = json.results.filter(
      (data) => data.type === "Trailer"
    );
    dispatch(addTrailerData(officialTrailer[0]));
  };
  useEffect(() => {
    fetchMovieVideo();
  }, []);
};

export default useVideoBackgroundHook;

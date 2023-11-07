import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovie from "../hooks/useUpcomingMovie";
import useTopRatedHooks from "../hooks/useTopRatedMovie";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => {
    return store.movieData.nowPlayingMovieData;
  });

  const upComingMovies = useSelector((store) => {
    return store.movieData.popularMoviesData;
  });
  const topRatedMovies = useSelector((store) => {
    console.log("top Rated", store.movieData);
    return store.movieData.topRatedMovieData;
  });

  return (
    <div className="md:-mt-56 z-10">
      <MovieList data={nowPlayingMovies} title="Now Playing" />
      <MovieList data={topRatedMovies} title="Top Rated" />
      <MovieList data={upComingMovies} title="Upcoming" />
    </div>
  );
};

export default SecondaryContainer;

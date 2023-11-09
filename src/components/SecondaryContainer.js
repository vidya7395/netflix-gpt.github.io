import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => {
    return store.movieData.nowPlayingMovieData;
  });

  const upComingMovies = useSelector((store) => {
    return store.movieData.popularMoviesData;
  });
  const topRatedMovies = useSelector((store) => {
    return store.movieData.topRatedMovieData;
  });

  return (
    <div className="md:-mt-56 z-10">
      <MovieList
        data={nowPlayingMovies}
        title="Now Playing"
        isWrapped={false}
      />
      <MovieList data={topRatedMovies} title="Top Rated" isWrapped={false} />
      <MovieList data={upComingMovies} title="Upcoming" isWrapped={false} />
    </div>
  );
};

export default SecondaryContainer;

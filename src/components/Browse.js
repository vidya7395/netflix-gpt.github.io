import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/useUpcomingMovie";
import useTopRatedHooks from "../hooks/useTopRatedMovie";
import useUpcomingMovieHook from "../hooks/useUpcomingMovie";
const Browse = () => {
  // Make custom hook to make an api call
  useNowPlayingHooks();
  useUpcomingMovieHook();
  useTopRatedHooks();
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <Header />
      <div className="flex flex-col overflow-auto h-full">
        <MainContainer />
        <SecondaryContainer />
      </div>
      {/* 
          MainContainer
            - Video Background
            - VideoTitle
          Secondary container
            - Movie list * n
              - cards * n
      */}
    </div>
  );
};

export default Browse;

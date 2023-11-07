import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedHooks from "../hooks/useTopRatedMovie";
import useUpcomingMovieHook from "../hooks/useUpcomingMovie";
import GptSearchContainer from "./GptSearchContainer";
import { useSelector } from "react-redux";
const Browse = () => {
  // Make custom hook to make an api call
  useNowPlayingHooks();
  useUpcomingMovieHook();
  useTopRatedHooks();
  const isShowSearch = useSelector((store) => store.gpt.isShowSearch);
  return (
    <div className="h-full overflow-auto flex flex-col relative">
      <Header />

      <div className="flex flex-col h-full">
        {isShowSearch ? (
          <GptSearchContainer />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
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

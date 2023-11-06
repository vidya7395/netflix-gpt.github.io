import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movieData.nowPlayingMovieData;
  });
  if (!movies) return;
  const { title, overview, id } = movies[0];
  return (
    <div className="p-3 flex flex-col relative scroll-smooth">
      <VideoBackground id={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;

import React from "react";

const VideoTitle = ({ overview, title }) => {
  return (
    <div className="md:max-w-md md:absolute top-20 p-5 ">
      <h1 className="text-5xl capitalize font-bold text-white mt-[10%]">
        {title}
      </h1>
      <div className="flex items-center mt-4">
        <button className="bg-white rounded-lg px-10 py-3 font-semibold me-3 text-xl">
          ▶ Play
        </button>
        <button className="bg-gray-500 rounded-lg px-10 py-3 font-semibold me-3 text-xl text-white">
          ＋ My List
        </button>
      </div>
      <p className="text-white mt-4 line-clamp-3" title={overview}>
        {overview}
      </p>
    </div>
  );
};

export default VideoTitle;

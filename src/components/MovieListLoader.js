import React from "react";

const MovieListLoader = () => {
  return (
    <div className="w-full p-5">
      <div className="text-xl text-center mb-5 font-bold">
        Sit tight your results are on the way.🚀
      </div>
      <div className="animate-pulse flex flex-wrap gap-5">
        <div className="rounded bg-slate-700  w-[200px] h-[200px]"></div>
        <div className="rounded bg-slate-700  w-[200px] h-[200px]"></div>
        <div className="rounded bg-slate-700  w-[200px] h-[200px]"></div>
        <div className="rounded bg-slate-700  w-[200px] h-[200px]"></div>
        <div className="rounded bg-slate-700  w-[200px] h-[200px]"></div>
        <div className="rounded bg-slate-700  w-[200px] h-[200px]"></div>
      </div>
    </div>
  );
};

export default MovieListLoader;

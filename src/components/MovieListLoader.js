import { debug } from "openai/core";
import React, { useEffect, useState } from "react";

const MovieListLoader = () => {
  const [message, setMessage] = useState(
    "Sit tight your results are on the way.🚀"
  );
  const messageChanger = () => {
    setTimeout(() => {
      debugger;
      setMessage("Wait for some more time your result is getting ready ⌛!");
    }, 3000);
  };
  messageChanger();
  return (
    <div className="w-full p-5">
      <div className="text-xl text-center mb-5 font-bold w-full p-4">
        {" "}
        {message}
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

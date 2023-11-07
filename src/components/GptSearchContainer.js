import React from "react";
import { NETFLIX_BG } from "../utilts/conts";
import GptSearchBox from "./GptSearchBox";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchContainer = () => {
  return (
    <div className="bg-white h-full">
      <img
        className="absolute top-0 bottom-0 left-0 right-0 h-full w-full z-0"
        src={NETFLIX_BG}
        alt=""
      />
      <GptSearchBox />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchContainer;

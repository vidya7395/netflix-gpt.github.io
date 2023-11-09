import React from "react";
import GptSearchBox from "./GptSearchBox";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchContainer = () => {
  return (
    <div className="bg-black h-full">
      <GptSearchBox />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchContainer;

import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieListLoader from "./MovieListLoader";

const GptMovieSuggestions = () => {
  const getMovieData = useSelector((store) => store.gpt.searchMovieList);
  const isShowLoader = useSelector((store) => store.gpt.isShowSuggestionLoader);
  return (
    <div className="p-1 z-10 relative flex mt-5 text-white">
      {isShowLoader && <MovieListLoader />}

      {!isShowLoader && getMovieData && (
        <div className="p-3 rounded text-lg flex flex-col  w-full">
          <h4 className="text-white font-bold">Search Result</h4>
          <div className="flex flex-wrap">
            {getMovieData.map((data, index) => (
              <MovieList data={data} title={data[0]?.title} isWrapped={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestions;

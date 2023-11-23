import React, { useRef, useState } from "react";
import { lang } from "../utilts/lang";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utilts/openai";
import { API_OPTION } from "../utilts/conts";
import {
  addSearchMovie,
  toggleShowSuggestionLoader,
} from "../utilts/Store/GptSlice";

const GptSearchBox = () => {
  const searchText = useRef(null);
  const language = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const [errroMessage, setErrorMessage] = useState(null);
  const handleGPTSearchClick = async () => {
    setErrorMessage(null);
    dispatch(toggleShowSuggestionLoader(true));
    try {
      const gptResults = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content:
              "Act as a movie recommendation system and suggest some movies for the query:" +
              searchText.current.value +
              " Only give me 5 movies names, comma separated like the example result given ahead. Example result: Dil, Sholay, golmaal ,Don,Gadar",
          },
        ],
        model: "gpt-3.5-turbo",
      });

      if (!gptResults.choices) {
        // TODO : Write Error Handling here
        alert(
          "Error occurred while searching the movies 😐, Please refresh the page or try after some time"
        );
        dispatch(toggleShowSuggestionLoader(false));
        return;
      }
      const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");
      const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
      const tmdbResult = await Promise.all(promiseArray);
      dispatch(toggleShowSuggestionLoader(false));
      dispatch(addSearchMovie(tmdbResult));
    } catch (err) {
      dispatch(toggleShowSuggestionLoader(false));
      if (err.error.code == "invalid_api_key") {
        setErrorMessage(
          "Error Occurred while searching the data, Please contact the admin as your openAI API key is invalid "
        );
      }
    }
  };
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };
  return (
    <>
      <div className="p-1 z-10 relative flex justify-center  mt-28">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-neutral-800 p-3 rounded  flex   items-center"
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 md:w-[500px] w-full rounded-md text-lg"
            placeholder={lang[language].searchBarPlaceHolder}
          />
          <button
            className="bg-red-600 px-7 py-4 text-lg font-medium text-white ms-5 rounded-md"
            onClick={handleGPTSearchClick}
          >
            {lang[language].search}
          </button>
        </form>
      </div>
      {errroMessage && (
        <div className="text-white bg-red-400 p-3 w-6/12 rounded m-5">
          {errroMessage}
        </div>
      )}
    </>
  );
};

export default GptSearchBox;

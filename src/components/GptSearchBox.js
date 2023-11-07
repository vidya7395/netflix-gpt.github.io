import React, { useRef } from "react";
import { lang } from "../utilts/lang";
import { useSelector } from "react-redux";

const GptSearchBox = () => {
  const name = useRef(null);
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="p-1 z-10 relative flex justify-center  mt-28">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-neutral-800 p-3 rounded  flex   items-center"
      >
        <input
          ref={name}
          type="text"
          className="p-4 md:w-[500px] w-full rounded-md text-lg"
          placeholder={lang[language].searchBarPlaceHolder}
        />
        <button className="bg-red-600 px-7 py-4 text-lg font-medium text-white ms-5 rounded-md">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;

import React from "react";
import { POSTER_PATH } from "../utilts/conts";

const MovieCard = ({ path, title }) => {
  if (!path) return;
  return (
    <img
      className="mt-5 w-[200px] object-cover cursor-pointer hover:scale-110 ease-in-out duration-300 "
      src={POSTER_PATH + path}
      alt={"Poster Image of movie" + title}
    />
  );
};

export default MovieCard;

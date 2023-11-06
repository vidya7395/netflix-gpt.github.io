import React from "react";
import { POSTER_PATH } from "../utilts/conts";
import MovieCard from "./MovieCard";

const MovieList = ({ data, title }) => {
  if (!data) return;

  return (
    <div className="text-white p-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex gap-5 overflow-auto pb-2">
        {data?.map((data) => {
          return (
            <MovieCard path={data.poster_path} title={title} key={data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;

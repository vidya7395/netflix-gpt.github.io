import React from "react";
import { POSTER_PATH } from "../utilts/conts";
import MovieCard from "./MovieCard";

const MovieList = ({ data, title }) => {
  console.log(data);
  if (!data) return;

  return (
    <div className="text-white p-5 w-full">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex gap-5 overflow-auto pb-2 w-full">
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

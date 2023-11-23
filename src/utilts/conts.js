export const NETFLIX_BG =
  "https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg";
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const NOW_PLAYING_MOVIE_DATA =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const SEARCH_MOVIE_API =
  "https://api.themoviedb.org/3/search/movie?query=andaz%20&include_adult=false&language=en-US&page=1";

export const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?&page=1";

export const POSTER_PATH = "https://image.tmdb.org/t/p/w500/";

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

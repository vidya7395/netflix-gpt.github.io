import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice = createSlice({
  name: "movieData",
  initialState: {
    nowPlayingMovieData: null,
    trailer: null,
    popularMoviesData: null,
    topRatedMovieData: null,
  },
  reducers: {
    addNowPlayingMoviesData: (state, action) => {
      state.nowPlayingMovieData = action.payload;
    },
    addTrailerData: (state, action) => {
      state.trailer = action.payload;
    },
    addPopularMovieData: (state, action) => {
      state.popularMoviesData = action.payload;
    },
    addTopRatedMoviesData: (state, action) => {
      state.topRatedMovieData = action.payload;
    },
  },
});

export const {
  addTopRatedMoviesData,
  addNowPlayingMoviesData,
  addTrailerData,
  addPopularMovieData,
} = movieDataSlice.actions;
export default movieDataSlice.reducer;

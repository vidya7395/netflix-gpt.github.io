import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    isShowSearch: false,
    searchMovieList: null,
    isShowSuggestionLoader: null,
  },
  reducers: {
    toggleIsShowSearch: (state, action) => {
      state.isShowSearch = !state.isShowSearch;
    },
    addSearchMovie: (state, action) => {
      state.searchMovieList = action.payload;
    },
    toggleShowSuggestionLoader: (state, action) => {
      state.isShowSuggestionLoader = action.payload;
    },
  },
});

export const {
  toggleShowSuggestionLoader,
  toggleIsShowSearch,
  addSearchMovie,
} = GptSlice.actions;

export default GptSlice.reducer;

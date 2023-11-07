import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    isShowSearch: false,
  },
  reducers: {
    toggleIsShowSearch: (state, action) => {
      state.isShowSearch = !state.isShowSearch;
    },
  },
});

export const { toggleIsShowSearch } = GptSlice.actions;

export default GptSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieDataSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movieData: movieReducer,
  },
});

export default appStore;

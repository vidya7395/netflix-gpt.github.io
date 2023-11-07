import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieDataSlice";
import GptReducer from "./GptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movieData: movieReducer,
    gpt: GptReducer,
    config: configReducer,
  },
});

export default appStore;

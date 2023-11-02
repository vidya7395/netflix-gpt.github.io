import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUserInfo: (state, action) => {
      return action.payload;
    },
    removeUserInfo: (state, action) => {
      return null;
    },
  },
});

export const { addUserInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;

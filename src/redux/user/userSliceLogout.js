import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "./operations.js";

const initialState = {
  usersLogin: {
    item: [],
    message: null,
    error: null,
    isLoading: false,
    isLogin: false,
  },
};

export const selectItemLogout = (state) => state.usersLogout.item;
export const selectMessageLogout = (state) => state.usersLogout.message;
export const selectLoadingLogout = (state) => state.usersLogout.isLoading;
export const selectErrorLogout = (state) => state.usersLogout.error;
export const selectIsLogout = (state) => state.usersLogout.isLogin;

const userSliceLogout = createSlice({
  name: "/logout",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        ((state.isLoading = false),
          (state.error = null),
          (state.item = []));
        state.isLogin = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        ((state.isLoading = false), (state.error = action.payload));
      });
  },
});

export default userSliceLogout.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./operations.js";


const initialState = {
  usersLogin: {
    item: [],
    message: null,
    error: null,
    isLoading: false,
    isLogin: false,
  },
};

export const selectItemLogin = (state) => state.usersLogin.item;
export const selectMessageLogin = (state) => state.usersLogin.message;
export const selectLoadingLogin = (state) => state.usersLogin.isLoading;
export const selectErrorLogin = (state) => state.usersLogin.error;
export const selectIsLogin = (state) => state.usersLogin.isLogin;

const userSliceLogin = createSlice({
  name: "/login",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
          state.isLoading = true
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            ((state.isLoading = false),
            (state.error = null),
            (state.item = action.payload));
            (state.isLogin = true)
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.payload
          });
        }
});



export default userSliceLogin.reducer;

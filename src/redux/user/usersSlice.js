import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./operations.js";

const initialState = {
  users: {
    item: [],
    message: null,
    error: null,
    isLoading: false,
    isLogin: false,
  },
};

export const selectItem = (state) => state.users.item;
export const selectMessage = (state) => state.users.message;
export const selectLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;
export const selectIsLogin = (state) => state.users.isLogin;


const usersSlice = createSlice({
  name: "/auth",
  initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false,
                state.error = null,
                state.message = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false,
                state.error = action.payload
            })
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
            })
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
  }
});

export default usersSlice.reducer

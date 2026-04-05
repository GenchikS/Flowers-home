import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./operations.js";

const initialState = {
  users: {
    item: [],
    error: null,
    isLoading: false,
    isLogin: false,
  },
};

export const selectUser = (state) => state.users.item;
export const selectLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;


const usersSlice = createSlice({
  name: "/user/register",
  initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false,
                state.error = null,
                state.item = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false,
                state.error = action.payload
            })
  }
});

export default usersSlice.reducer

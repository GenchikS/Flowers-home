import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./operations.js";

const initialState = {
  usersRegister: {
    item: [],
    message: null,
    error: null,
    isLoading: false,
    isLogin: false,
  },
};

export const selectMessageRegister = (state) => state.usersRegister.message;
export const selectLoadingRegister = (state) => state.usersRegister.isLoading;
export const selectErrorRegister = (state) => state.usersRegister.error;


const usersSliceRegister = createSlice({
  name: "/register",
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
  }
});

export default usersSliceRegister.reducer

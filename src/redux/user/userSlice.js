import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../operations.js";

const initialState = {
  user: {
    name: undefined,
    isLoading: false,
    error: null,
  },
  token: null,
  isLogin: false,
  isRefreshing: false,
};

// export const selectPages = (state) => state.flowers.page;
export const selectUser = (state) => state.user.name;
export const selectLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;

const userSlice = createSlice({
  name: "/user",
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.error = null),
          (state.name = action.payload.name),
          (state.modalPhoto = false);
      })
      .addCase(registerUser.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
  },
});

export default userSlice.reducer;

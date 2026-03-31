import { createSlice } from "@reduxjs/toolkit";
import { fetchFlowers } from "./operations.js";

const initialState = {
  flowers: {
    items: [],
    isLoading: false,
    error: null,
    modalPhoto: false,
    page: 1
  }
};

// export const selectPages = (state) => state.flowers.page;
export const selectFlowers = (state) => state.flowers.items;
export const selectLoading = (state) => state.flowers.isLoading;
export const selectError = (state) => state.flowers.error;
export const selectModalPhoto = (state) => state.flowers.modalPhoto;


const flowersSlice = createSlice({
  name: "/flowers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.error = null),
          // (state.items = console.log(action.payload)),
          // (state.page = action.payload.page + 1),
          (state.items = action.payload);
        state.modalPhoto = false;
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
  },
});

export default flowersSlice.reducer;
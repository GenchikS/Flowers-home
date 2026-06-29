import { createSlice } from "@reduxjs/toolkit";
import { fetchAddFlowers, fetchAddPhoto, fetchAddPhotoWeb, fetchFlowers, ressetIsCode } from "./operations.js";

const initialState = {
  flowers: {
    items: [],
    isLoading: false,
    isLoadingPhoto: false,
    error: null,
    modalPhoto: false,
    page: 1,
    isCode: "",
    photo: null,
    photoWeb: null,
  },
};

// export const selectPages = (state) => state.flowers.page;
export const selectFlowers = (state) => state.flowers.items;
export const selectLoading = (state) => state.flowers.isLoading;
export const selectError = (state) => state.flowers.error;
export const selectModalPhoto = (state) => state.flowers.modalPhoto;
export const selectIsCode = (state) => state.flowers.isCode;
export const selectId = (state) => state.flowers.id;
export const selectIsUrlPhoto = (state) => state.flowers.photo;
export const selectIsUrlWebPhoto = (state) => state.flowers.photoWeb;
export const selectLoadingPhoto = (state) => state.flowers.isLoadingPhoto;


const flowersSlice = createSlice({
  name: "/flowers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        ((state.isLoading = false),
          (state.error = null),
          // (state.items = console.log(action.payload)),
          (state.items = action.payload));
        state.modalPhoto = false;
      })
      .addCase(fetchFlowers.rejected, (state, action) => {
        ((state.isLoading = false), (state.error = action.payload));
      })
      .addCase(fetchAddFlowers.pending, (state) => {
        state.isLoadingPhoto = true;
      })
      .addCase(fetchAddFlowers.fulfilled, (state, action) => {
        state.error = null;
        state.isCode = action.payload.data.code;
        state.id = action.payload.data._id;
        state.isLoadingPhoto = false;
      })
      .addCase(fetchAddFlowers.rejected, (state, action) => {
        ((state.isLoadingPhoto = false), (state.error = action.payload));
      })
      .addCase(fetchAddPhoto.pending, (state) => {
        state.isLoadingPhoto = true;
      })
      .addCase(fetchAddPhoto.fulfilled, (state, action) => {
        state.error = null;
        state.isLoadingPhoto = false;
        state.photo = action.payload.data.photo;
      })
      .addCase(fetchAddPhoto.rejected, (state, action) => {
        ((state.isLoadingPhoto = false), (state.error = action.payload));
      })
      .addCase(fetchAddPhotoWeb.pending, (state, action) => {
        ((state.isLoadingPhoto = true), (state.error = action.payload));
      })
      .addCase(fetchAddPhotoWeb.fulfilled, (state, action) => {
        state.error = null;
        ((state.isLoadingPhoto = false),
          (state.photoWeb = action.payload.data.photoWeb));
      })
      .addCase(fetchAddPhotoWeb.rejected, (state, action) => {
        ((state.isLoadingPhoto = false), (state.error = action.payload));
      })
      .addCase(ressetIsCode.pending, (state, action) => {
        (
          // (state.isLoadingPhoto = true),
          (state.error = action.payload));
      })
      .addCase(ressetIsCode.fulfilled, (state) => {
        state.error = null;
        (
          (state.isCode = ''),
          (state.photo = null),
          (state.photoWeb = null));
      })
      .addCase(ressetIsCode.rejected, (state, action) => {
        (
          (state.error = action.payload));
      });
  }
});

export default flowersSlice.reducer;
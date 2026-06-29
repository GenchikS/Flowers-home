import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://flowers-home-bd.onrender.com";
// axios.defaults.baseURL = "http://localhost:3000"; 

// const page = 2;

export const fetchFlowers = createAsyncThunk(
  "/flowers",
  async ({ page, perPage, color, titleSource, size }, thunkAPI) => {
    // console.log("color2", color);
    // console.log("page2", page);
    // console.log("perPage2", perPage);
    // console.log("titleSource", titleSource);

    try {
      const response = await axios.get(
        `/?titleSource=${titleSource}&size=${size}&page=${page}&color=${color}&perPage=${perPage}`
      );
      // console.log("response", response.data);
      return response.data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchAddFlowers = createAsyncThunk(
  "/flowers/add",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const respons = await axios.post(
        `/admin/flowers/chrysanthemums/add/`,
        payload,
      );
      // console.log("add respons", respons.data);
      return respons.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const fetchAddPhoto = createAsyncThunk(
  "photo/add",
  async (payload, thunkAPI) => {
    try {
      // console.log("payload", payload);
      const formData = new FormData();
      formData.append("photo", payload.file);
      const id = payload.id;
      const data = await axios.patch(
        `/admin/flowers/chrysanthemums/photo/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      // console.log("data", data);
      return data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const fetchAddPhotoWeb = createAsyncThunk(
  "photoWeb/add",
  async (payload, thunkAPI) => {
    try {
      // console.log("payload", payload);
      const formData = new FormData();
      formData.append("photoWeb", payload.file);
      const id = payload.id;
      const data = await axios.patch(
        `/admin/flowers/chrysanthemums/photoWeb/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      // console.log("dataWEB", data);
      return data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);


export const ressetIsCode = createAsyncThunk(
  "resset/isCode",
  async (payload, thunkAPI) => {
    try {
      // console.log("payload", payload);
      // return payload;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);





import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://flowers-home-bd.onrender.com";

// const page = 2;

export const fetchFlowers = createAsyncThunk(
  "flowers/fetchAll",
  async ( {page, perPage, color}, thunkAPI) => {
    // console.log("color2", color);
    // console.log("page2", page);
    // console.log("perPage2", perPage);


    try {
      const response = await axios.get(
        `/?page=${page}&color=${color}`
      );
      // console.log("response", response.data);
      return response.data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
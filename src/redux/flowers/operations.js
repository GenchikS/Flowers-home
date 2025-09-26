import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://flowers-home-bd.onrender.com";

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


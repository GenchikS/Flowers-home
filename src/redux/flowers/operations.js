import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://flowers-home-bd.onrender.com";

// const page = 2;

export const fetchFlowers  = createAsyncThunk("flowers/fetchAll", async (page, thunkAPI) => {
    try {
        const response = await axios.get(`/?page=${page}`);
        // console.log("response", response.data);
        return response.data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
})
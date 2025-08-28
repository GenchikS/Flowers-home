import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://flowers-home-bd.onrender.com";

export const fetchFlowers = createAsyncThunk("flowers/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`/`);
        // console.log("response", response.data);
        return response.data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
})
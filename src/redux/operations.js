import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://flowers-home-bd.onrender.com";
// axios.defaults.baseURL = "PORT:3000";


// const page = 2;
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}; 

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

export const registerUser = createAsyncThunk(`user/register`, 
  async (credential, thunkAPI) => {
    // console.log("credential", credential);
    try {
      // const responseUser = await axios.get(`/`)



      const responseAdd = await axios.post(`/register`, credential);
      console.log("responseAdd", responseAdd.data);
      // setAuthHeader(responseAdd.data.token);
      return responseAdd.data.data;
    } catch (error) {
      console.log("err", error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  `/login`,
  async (credential, thunkAPI) => {
    console.log("credential", credential);
    try {
      const response = await axios.post(`/login`, credential);
      console.log("response", response.data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchUserName = createAsyncThunk(
//   `/`,
//   async (_, thunkAPI) => {
//     // console.log("credential", credential);
//     try {
//       const response = await axios.post(`/`, credential);
//       // console.log("response", response);
//       setAuthHeader(response.data.token);
//       // return response.name;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
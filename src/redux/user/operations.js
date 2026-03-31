import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const registerUser = createAsyncThunk(
  `user/register`,
  async (credential, thunkAPI) => {
    console.log("credential", credential);
    try {
    //   const responseUser = await axios.get(`/`)

      const responseAdd = await axios.post(`/register`, credential);
      console.log("responseAdd", responseAdd.data);
      // setAuthHeader(responseAdd.data.token);
      return responseAdd.data;
    } catch (error) {
      console.log("err", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

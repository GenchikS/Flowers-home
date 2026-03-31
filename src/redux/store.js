import { configureStore } from "@reduxjs/toolkit";
import flowersReducer from "./flowers/flowersSlice.js";

export const store = configureStore({
  reducer: {
    flowers: flowersReducer,
  },
});
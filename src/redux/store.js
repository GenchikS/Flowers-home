import { configureStore } from "@reduxjs/toolkit";
import flowersReducer from "./flowers/flowersSlice.js";
import usersReducer from "./user/usersSlice.js";

export const store = configureStore({
  reducer: {
    flowers: flowersReducer,
    users: usersReducer,
  },
});
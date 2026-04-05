import { configureStore } from "@reduxjs/toolkit";
import flowersReducer from "./flowers/flowersSlice.js";
import usersRegisterReducer from "./user/usersSliceRegister.js";
import usersLoginReducer from "./user/usersSliceLogin.js"

export const store = configureStore({
  reducer: {
    flowers: flowersReducer,
    usersRegister: usersRegisterReducer,
    usersLogin: usersLoginReducer,
  },
});
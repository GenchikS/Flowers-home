import { configureStore } from "@reduxjs/toolkit";
import flowersReducer from "./flowers/flowersSlice.js";
import usersReducer from "./user/usersSlice.js";
import usersLoginReducer from "./user/usersSliceLogin.js"
// import userLogoutReducer from "./user/userSliceLogout.js";


export const store = configureStore({
  reducer: {
    flowers: flowersReducer,
    users: usersReducer,
    usersLogin: usersLoginReducer,
    // userLogout: userLogoutReducer,
  },
});
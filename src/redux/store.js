import { configureStore } from "@reduxjs/toolkit";
import flowersReducer from "./flowers/flowersSlice.js";
import userReducer from "./user/userSlice.js";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistUserConfig = {
  key: "root",
  storage,
  whitelist: [`token`]
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    flowers: flowersReducer,
    user: persistedUserReducer,
  },
});


export const persister = persistStore(store)
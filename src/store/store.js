"use client";

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "@/store/utils/usersSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // persist only auth
};

const rootReducer = combineReducers({
  auth: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

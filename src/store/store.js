import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducers } from "./rootreducers";

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware(),
  devTools: process.env.Node_ENV !== "production",
});

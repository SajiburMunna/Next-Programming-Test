import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootreducers";

export const store = configureStore({
  reducer: rootReducers,

  devTools: process.env.Node_ENV !== "production",
});

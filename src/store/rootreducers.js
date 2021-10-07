import { combineReducers } from "@reduxjs/toolkit";
import { dataStoreSlice } from "../redux/slice";
export const rootReducers = combineReducers({
  data: dataStoreSlice.reducer,
});

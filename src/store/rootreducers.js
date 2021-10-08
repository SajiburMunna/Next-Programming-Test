import { combineReducers } from "@reduxjs/toolkit";
import { dataStoreSlice } from "../redux/slice";
export const rootReducers = combineReducers({
  Alldata: dataStoreSlice.reducer,
});

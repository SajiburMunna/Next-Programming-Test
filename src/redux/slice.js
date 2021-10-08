import { createSlice } from "@reduxjs/toolkit";
export const dataStoreSlice = createSlice({
  name: "store",
  initialState: {
    data: [],
    searchData: "",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    searchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

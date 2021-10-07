import { createSlice } from "@reduxjs/toolkit";
export const dataStoreSlice = createSlice({
  name: "DataStore",
  initialState: {
    data: "",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

import { dataStoreSlice } from "./slice";
import axios from "axios";
const { actions: slice } = dataStoreSlice;

export const getDataAction = () => (dispatch) => {
  axios
    .get("https://api.spacexdata.com/v3/launches")
    .then((response) => dispatch(slice.setData(response.data)));
};

export const searchAction = (searchValue) => (dispatch) => {
  dispatch(slice.searchData(searchValue));
};

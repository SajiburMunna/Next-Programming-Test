import { dataStoreSlice } from "./slice";
const { actions: slice } = dataStoreSlice;

export const getDataAction = () => (dispatch) => {
  fetch("https://api.spacexdata.com/v3/launches")
    .then((response) => response.json())
    .then((json) => dispatch(slice.setData(json)));
};

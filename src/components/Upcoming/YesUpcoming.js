import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const YesUpcoming = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);
  // console.log(Data.data);
  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const Status = Data.data.filter((s) => s.upcoming === true);
  console.log(Status);
  return (
    <div>
      <h1>Yes</h1>
    </div>
  );
};

export default YesUpcoming;

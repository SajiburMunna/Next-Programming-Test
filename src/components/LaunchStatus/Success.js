import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const Success = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);
  // console.log(Data.data);
  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const succesStatus = Data.data.filter((s) => s.launch_success === true);
  console.log(succesStatus);
  return (
    <div>
      <h1>Success</h1>
    </div>
  );
};

export default Success;

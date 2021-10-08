import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const Failure = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);
  // console.log(Data.data);
  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const succesStatus = Data.data.filter((s) => s.launch_success === false);
  console.log(succesStatus);
  return (
    <div>
      <h1>Failure</h1>
    </div>
  );
};

export default Failure;

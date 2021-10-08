import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const NoUpcoming = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);
  // console.log(Data.data);
  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const upcomingStatus = Data.data.filter((s) => s.upcoming === false);
  console.log(upcomingStatus);
  return (
    <div>
      <h1>No</h1>
    </div>
  );
};

export default NoUpcoming;

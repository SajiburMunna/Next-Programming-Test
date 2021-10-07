import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const HomePage = () => {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state);
  console.log(Data.data.data);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  return <div></div>;
};

export default HomePage;

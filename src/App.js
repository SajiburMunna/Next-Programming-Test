import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { getDataAction } from "./redux/action";
function App() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.DataStore);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

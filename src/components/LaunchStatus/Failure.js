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

  const failureStatus = Data.data.filter((s) => s.launch_success === false);
  console.log(failureStatus);
  return (
    <div>
      <h1 className="text-center">Failure Launch</h1>
      <div className="d-flex align-content-start flex-wrap justify-content-center">
        {failureStatus.map((fail) => (
          <div
            class="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <div class="card-body ">
              <h5 class="card-title">Flight Number : {fail.flight_number}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Mission Name : {fail?.mission_name}
              </h6>
              <p class="card-text">Rocket Name : {fail.rocket.rocket_name} </p>
              <p class="card-text">Rocket Type : {fail.rocket.rocket_type} </p>
              <p class="card-text">Launch Year : {fail.launch_year} </p>
              <a href="#" class="card-link">
                View More Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Failure;

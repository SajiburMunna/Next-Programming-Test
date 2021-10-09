import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const Success = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const succesStatus = Data.data.filter((s) => s.launch_success === true);
  console.log(succesStatus);
  return (
    <div>
      <h1 data-testid="success-test-1" className="text-center">
        {" "}
        Success Launch{" "}
      </h1>
      <div className="d-flex align-content-start flex-wrap justify-content-center">
        {succesStatus.map((success) => (
          <div
            key={Math.random()}
            className="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <div className="card-body ">
              <h5 className="card-title">
                Flight Number : {success.flight_number}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Mission Name : {success?.mission_name}
              </h6>
              <p className="card-text">
                Rocket Name : {success.rocket.rocket_name}{" "}
              </p>
              <p className="card-text">
                Rocket Type : {success.rocket.rocket_type}{" "}
              </p>
              <p className="card-text">Launch Year : {success.launch_year} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;

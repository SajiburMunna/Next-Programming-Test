import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const Failure = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const failureStatus = Data.data.filter((s) => s.launch_success === false);

  return (
    <div>
      <h1 data-testid="test-1" className="text-center">
        Failure Launch
      </h1>
      {failureStatus.length > 0 ? (
        <div className="d-flex align-content-start flex-wrap justify-content-center">
          {failureStatus.map((fail) => (
            <div
              key={Math.random()}
              className="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">
                  Flight Number : {fail.flight_number}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Mission Name : {fail?.mission_name}
                </h6>
                <p className="card-text">
                  Rocket Name : {fail.rocket.rocket_name}{" "}
                </p>
                <p className="card-text">
                  Rocket Type : {fail.rocket.rocket_type}{" "}
                </p>
                <p className="card-text">Launch Year : {fail.launch_year} </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>FailureLaunch Not Available Now</p>
      )}
    </div>
  );
};

export default Failure;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const LastYear = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);
  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;
  const LastYear = Data.data.filter(
    (s) => s.launch_year === previousYear.toString()
  );

  return (
    <div>
      <h1 data-testid="lastYear-test-1" className="text-center">
        Last Year Launch
      </h1>
      {LastYear.length > 0 ? (
        <div className="d-flex align-content-start flex-wrap justify-content-center">
          {LastYear.map((lastyear) => (
            <div
              key={Math.random()}
              className="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">
                  Flight Number : {lastyear.flight_number}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Mission Name : {lastyear?.mission_name}
                </h6>
                <p className="card-text">
                  Rocket Name : {lastyear.rocket.rocket_name}{" "}
                </p>
                <p className="card-text">
                  Rocket Type : {lastyear.rocket.rocket_type}{" "}
                </p>
                <p className="card-text">
                  Launch Year : {lastyear.launch_year}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Launch Not Available Now</p>
      )}
    </div>
  );
};

export default LastYear;

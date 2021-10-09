import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const YesUpcoming = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const upcomingStatus = Data.data.filter((s) => s.upcoming === true);

  return (
    <div>
      <h1 data-testid="upcoming-test-1" className="text-center">
        Upcoming
      </h1>
      {upcomingStatus.length > 0 ? (
        <div className="d-flex align-content-start flex-wrap justify-content-center">
          {upcomingStatus.map((upcoming) => (
            <div
              key={Math.random()}
              className="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">
                  Flight Number : {upcoming.flight_number}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Mission Name : {upcoming?.mission_name}
                </h6>
                <p className="card-text">
                  Rocket Name : {upcoming.rocket.rocket_name}{" "}
                </p>
                <p className="card-text">
                  Rocket Type : {upcoming.rocket.rocket_type}{" "}
                </p>
                <p className="card-text">
                  Launch Year : {upcoming.launch_year}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Upcoming Launch Not Available Now</p>
      )}
    </div>
  );
};

export default YesUpcoming;

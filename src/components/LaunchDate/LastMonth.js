import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const LastMonth = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const newDate = new Date();
  const month = newDate.getMonth();
  const monthString = month.toString();

  const y = new Date();
  const fy = y.getFullYear();
  const fullYearToString = fy.toString();
  const LastMonth = Data.data.filter((s) =>
    s.launch_date_local.includes(
      `${fullYearToString}-${monthString <= 9 ? 0 : null}${monthString}`
    )
  );

  return (
    <div>
      <h1 data-testid="lastMonth-test-1" className="text-center">
        Last Month Launch
      </h1>
      {LastMonth.length > 0 ? (
        <div className="d-flex align-content-start flex-wrap justify-content-center">
          {LastMonth.map((lastmonth) => (
            <div
              key={Math.random()}
              className="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">
                  Flight Number : {lastmonth.flight_number}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Mission Name : {lastmonth?.mission_name}
                </h6>
                <p className="card-text">
                  Rocket Name : {lastmonth.rocket.rocket_name}{" "}
                </p>
                <p className="card-text">
                  Rocket Type : {lastmonth.rocket.rocket_type}{" "}
                </p>
                <p className="card-text">
                  Launch Year : {lastmonth.launch_year}{" "}
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

export default LastMonth;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";
import moment from "moment";

const LastWeek = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const x = [];
  const lastweek_lastDay = moment()
    .subtract(1, "weeks")
    .endOf("week")
    .format("YYYY-MM-DD");
  x.push(lastweek_lastDay);
  for (let i = 1; i < 7; i++) {
    const b = moment()
      .subtract(i, "days")
      .subtract(1, "week")
      .format("YYYY-MM-DD");
    x.push(b);
  }

  console.log(x);

  const LastWeekDate = Data.data.filter((l) =>
    l.launch_date_local.includes(x.forEach((item) => item.toString()))
  );

  console.log(LastWeekDate);

  return (
    <div>
      <h1 data-testid="lastWeek-test-1" className="text-center">
        Last Week Launch
      </h1>
      {LastWeekDate.length > 0 ? (
        <div className="d-flex align-content-start flex-wrap justify-content-center">
          {LastWeekDate.map((lastweek) => (
            <div
              key={Math.random()}
              className="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">
                  Flight Number : {lastweek.flight_number}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Mission Name : {lastweek?.mission_name}
                </h6>
                <p className="card-text">
                  Rocket Name : {lastweek.rocket.rocket_name}{" "}
                </p>
                <p className="card-text">
                  Rocket Type : {lastweek.rocket.rocket_type}{" "}
                </p>
                <p className="card-text">
                  Launch Year : {lastweek.launch_year}{" "}
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

export default LastWeek;

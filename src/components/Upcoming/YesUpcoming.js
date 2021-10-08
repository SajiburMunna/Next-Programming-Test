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
  console.log(upcomingStatus);
  return (
    <div>
      <h1 className="text-center">Upcoming</h1>
      <div className="d-flex align-content-start flex-wrap justify-content-center">
        {upcomingStatus.map((upcoming) => (
          <div
            class="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <div class="card-body ">
              <h5 class="card-title">
                Flight Number : {upcoming.flight_number}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Mission Name : {upcoming?.mission_name}
              </h6>
              <p class="card-text">
                Rocket Name : {upcoming.rocket.rocket_name}{" "}
              </p>
              <p class="card-text">
                Rocket Type : {upcoming.rocket.rocket_type}{" "}
              </p>
              <p class="card-text">Launch Year : {upcoming.launch_year} </p>
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

export default YesUpcoming;

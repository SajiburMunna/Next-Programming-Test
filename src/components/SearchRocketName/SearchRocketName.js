import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction } from "../../redux/action";

const SearchRocketName = () => {
  const searchRocket = useSelector((state) => state.Alldata);
  console.log(searchRocket.searchData);

  const Data = useSelector((state) => state.Alldata);
  console.log(Data.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  return (
    <div data-testid="searchRocket-test-1" className="text-center">
      <h1>Your Search Rocket {searchRocket.searchData}</h1>
      <div className="d-flex align-content-start flex-wrap justify-content-center">
        {Data.data
          .filter((data) => {
            if (searchRocket.searchData === "") {
            } else if (
              data.rocket.rocket_name
                .toLowerCase()
                .includes(searchRocket.searchData.toLowerCase())
            ) {
              return data;
            }
          })
          .map((roc) => (
            <div
              key={Math.random()}
              className="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">
                  Flight Number : {roc.flight_number}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Mission Name : {roc?.mission_name}
                </h6>
                <p className="card-text">
                  Rocket Name : {roc.rocket.rocket_name}{" "}
                </p>
                <p className="card-text">
                  Rocket Type : {roc.rocket.rocket_type}{" "}
                </p>
                <p className="card-text">Launch Year : {roc.launch_year} </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchRocketName;

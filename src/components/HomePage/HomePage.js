import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const HomePage = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);

  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 3);
  };

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  return (
    <div data-testid="home-test-1" className=" text-center">
      <div className="d-flex align-content-start flex-wrap justify-content-center">
        {Data.data.length > 0 ? (
          Data.data.slice(0, visible).map((p) => (
            <div
              key={Math.random()}
              className="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">
                  Flight Number : {p.flight_number}
                </h5>
                <h6 className="card-subtitle mb-2  ">
                  Mission Name : {p?.mission_name}
                </h6>
                <p className="card-text">
                  Rocket Name : {p.rocket.rocket_name}{" "}
                </p>
                <p className="card-text">
                  Rocket Type : {p.rocket.rocket_type}{" "}
                </p>
                <p className="card-text">Launch Year : {p.launch_year} </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {Data.data.length > 0 ? (
        <button
          className="mb-3  btn btn-outline-success"
          type="button"
          onClick={showMoreItems}
        >
          {" "}
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default HomePage;

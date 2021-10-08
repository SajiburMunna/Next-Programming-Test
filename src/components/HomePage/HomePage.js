import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/action";

const HomePage = () => {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Alldata);
  console.log(Data.data);

  const [items, setItems] = useState(Data.data);
  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 3);
  };

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  return (
    <div className=" text-center">
      <div className="d-flex align-content-start flex-wrap justify-content-center">
        {Data.data.slice(0, visible).map((p) => (
          <div
            class="card m-3 text-center  shadow p-3 mb-5 bg-body rounded"
            style={{ width: "18rem" }}
          >
            <div class="card-body ">
              <h5 class="card-title">Flight Number : {p.flight_number}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Mission Name : {p?.mission_name}
              </h6>
              <p class="card-text">Rocket Name : {p.rocket.rocket_name} </p>
              <p class="card-text">Rocket Type : {p.rocket.rocket_type} </p>
              <p class="card-text">Launch Year : {p.launch_year} </p>
              <a href="#" class="card-link">
                View More Details
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mb-3 btn btn-info"
        type="button"
        onClick={showMoreItems}
      >
        {" "}
        Load More
      </button>
    </div>
  );
};

export default HomePage;

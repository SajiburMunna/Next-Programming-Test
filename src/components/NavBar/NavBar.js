import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchAction } from "../../redux/action.js";
import { useDispatch } from "react-redux";

function NavBar() {
  const [searchData, setSearchData] = useState();
  const dispatch = useDispatch();
  console.log(searchData);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="##">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className=" nav-link active" to="/">
                  HOME
                </Link>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Launch Date
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/lastweek">
                      Last Week
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/lastmonth">
                      Last Month
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/lastyear">
                      Last Year
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Launch Status
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/failure">
                      Failure
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/success">
                      Success
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Upcoming
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/yesupcoming">
                      YES Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/noupcoming">
                      NO Upcoming
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                value={searchData}
                onChange={(evant) => setSearchData(evant.target.value)}
                placeholder="Search By Rocket Name"
                aria-label="Search"
              />
              {searchData ? (
                <button
                  className="btn btn-outline-success"
                  onClick={() => dispatch(searchAction(), setSearchData(""))}
                >
                  Search
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

import React, { Suspense } from "react";

import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LastMonth from "./components/LaunchDate/LastMonth";
import LastWeek from "./components/LaunchDate/LastWeek";
import LastYear from "./components/LaunchDate/LastYear";
import Failure from "./components/LaunchStatus/Failure";
import Success from "./components/LaunchStatus/Success";
import YesUpcoming from "./components/Upcoming/YesUpcoming";
import HomePage from "./components/HomePage/HomePage";
import SearchRocketName from "./components/SearchRocketName/SearchRocketName";

function App() {
  return (
    <div>
      <Router>
        <Suspense>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/lastmonth" component={LastMonth}></Route>
            <Route exact path="/lastweek" component={LastWeek}></Route>
            <Route exact path="/lastyear" component={LastYear}></Route>
            <Route exact path="/failure" component={Failure}></Route>
            <Route exact path="/success" component={Success}></Route>
            <Route exact path="/yesupcoming" component={YesUpcoming}></Route>

            <Route exact path="/search" component={SearchRocketName}></Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

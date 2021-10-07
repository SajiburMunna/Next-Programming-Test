import React from "react";

import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LastMonth from "./components/LaunchDate/LastMonth";
import LastWeek from "./components/LaunchDate/LastWeek";
import LastYear from "./components/LaunchDate/LastYear";
import Failure from "./components/LaunchStatus/Failure";
import Success from "./components/LaunchStatus/Success";
import YesUpcoming from "./components/Upcoming/YesUpcoming";
import NoUpcoming from "./components/Upcoming/NoUpcoming";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/lastmonth" component={LastMonth}></Route>
          <Route exact path="/lastweek" component={LastWeek}></Route>
          <Route exact path="/lastyear" component={LastYear}></Route>
          <Route exact path="/failure" component={Failure}></Route>
          <Route exact path="/success" component={Success}></Route>
          <Route exact path="/yesupcoming" component={YesUpcoming}></Route>
          <Route exact path="/noupcoming" component={NoUpcoming}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

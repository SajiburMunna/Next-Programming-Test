import NavBar from "./../NavBar/NavBar";

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./../../store/store";

test("render Failure", () => {
  render(
    <Provider store={store}>
      <Router>
        <NavBar />
      </Router>
    </Provider>
  );
  const failure = screen.getByTestId("navBar-test-1");

  expect(failure).toBeInTheDocument();
});

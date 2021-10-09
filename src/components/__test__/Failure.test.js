import { render, screen } from "@testing-library/react";

import Failure from "./../LaunchStatus/Failure";
import { Provider } from "react-redux";

import { store } from "./../../store/store";
test("render Failure", () => {
  render(
    <Provider store={store}>
      <Failure />
    </Provider>
  );
  const failure = screen.getByTestId("test-1");

  expect(failure).toBeInTheDocument();
});

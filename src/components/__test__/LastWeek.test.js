import LastWeek from "./../LaunchDate/LastWeek";

import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "./../../store/store";

test("render Failure", () => {
  render(
    <Provider store={store}>
      <LastWeek />
    </Provider>
  );
  const failure = screen.getByTestId("lastWeek-test-1");

  expect(failure).toBeInTheDocument();
});

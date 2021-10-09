import Success from "./../LaunchStatus/Success";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./../../store/store";

test("render  Success", () => {
  render(
    <Provider store={store}>
      <Success />
    </Provider>
  );
  const failure = screen.getByTestId("success-test-1");

  expect(failure).toBeInTheDocument();
});

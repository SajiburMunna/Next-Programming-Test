import LastMonth from "./../LaunchDate/LastMonth";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./../../store/store";

test("render Failure", () => {
  render(
    <Provider store={store}>
      <LastMonth />
    </Provider>
  );
  const failure = screen.getByTestId("lastMonth-test-1");

  expect(failure).toBeInTheDocument();
});

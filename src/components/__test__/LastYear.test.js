import LastYear from "./../LaunchDate/LastYear";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./../../store/store";

test("render Failure", () => {
  render(
    <Provider store={store}>
      <LastYear />
    </Provider>
  );
  const failure = screen.getByTestId("lastYear-test-1");

  expect(failure).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import HomePage from "./../HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./../../store/store";
test("render Failure", () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
  const failure = screen.getByTestId("home-test-1");

  expect(failure).toBeInTheDocument();
});

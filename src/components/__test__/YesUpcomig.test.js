import YesUpcoming from "./../Upcoming/YesUpcoming";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./../../store/store";

test("render Upcoming", () => {
  render(
    <Provider store={store}>
      <YesUpcoming />
    </Provider>
  );
  const failure = screen.getByTestId("upcoming-test-1");

  expect(failure).toBeInTheDocument();
});

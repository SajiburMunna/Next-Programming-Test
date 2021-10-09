import SearchRocketName from "./../SearchRocketName/SearchRocketName";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./../../store/store";

test("render Failure", () => {
  render(
    <Provider store={store}>
      <SearchRocketName />
    </Provider>
  );
  const failure = screen.getByTestId("searchRocket-test-1");

  expect(failure).toBeInTheDocument();
});

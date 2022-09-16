import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import App from "../App";

beforeAll(() => {
  jest.useFakeTimers();
});

it("executes setTimeout() to update state and render <Home />", () => {
  render(<App />);
  expect(screen.getByTestId("entry_component")).toBeVisible();

  act(() => {
    jest.runAllTimers();
  });
  expect(screen.getByTestId("home_component")).toBeVisible();
});

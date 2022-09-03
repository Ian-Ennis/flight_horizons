// Import screen to avoid having to provide a div container when querying document.body nested elements.
import { render, screen, getByRole } from "@testing-library/react";
import App from "./App";

// create a virtual dom with the app component
describe("App", () => {
  test("renders correctly", () => {
    render(<App />);
    screen.getByRole()
  })
})


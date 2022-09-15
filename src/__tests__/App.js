import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {render, screen, mount} from '@testing-library/react'
import App from "../App";
// import Entry from "../Components/Entry"

// afterEach(() => {
//   jest.restoreAllMocks();
// });

// const entryComponent = jest.mock("../Components/Entry")
// const homeComponent = jest.mock("../Components/Home")

describe("app component", () => {
  // it("is the app component", () => {
  //   render(<App>{entryComponent}{homeComponent}</App>)
  //   expect(screen).toContain(entryComponent)
  // })
  
  it("Matches snapshot", () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<App />);
    expect(result).toMatchInlineSnapshot(`
  <React.Fragment>
    <Entry />
  </React.Fragment>
  `);
  });
})


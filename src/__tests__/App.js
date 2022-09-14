import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "../App";

it("Matches snapshot", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<App />);
  expect(result).toMatchInlineSnapshot(`
<React.Fragment>
  <Entry />
</React.Fragment>
`);
});

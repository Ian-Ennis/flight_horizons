import React from "react";
import { render, screen } from "@testing-library/react";
import Entry from "../Components/Entry";

// Inline snapshot test for <Entry /> component
it("matches the snapshot", () => {
  render(<Entry />);
  const entryComponent = screen.getByTestId("entry_component");

  expect(entryComponent).toMatchInlineSnapshot(`
<div
  data-testid="entry_component"
  id="entry_container"
>
  <div
    id="entry_title_container"
  >
    <img
      alt="flight_horizons_title"
      id="entry_title_animated"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/title.png"
    />
  </div>
  <div
    id="entry_visual_container"
  >
    <img
      alt="spaceship_animation"
      id="entry_visual_animated"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/spaceship.png"
    />
  </div>
</div>
`);
});

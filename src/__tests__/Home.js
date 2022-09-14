import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Home from "../Components/Home";

it("Matches snapshot", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Home />);
  expect(result).toMatchInlineSnapshot(`
<React.Fragment>
  <div
    id="home_title_container"
  >
    <img
      alt="flight_horizons"
      id="home_title"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/title.png"
    />
  </div>
  <div
    id="launch_container"
  >
    <LaunchDescription
      index={0}
    />
    <LaunchCarousel
      handleSelect={[Function]}
    />
    <LaunchPad
      index={0}
    />
  </div>
  <div
    id="filler_container"
  />
  <div
    id="horizon_container"
  >
    <img
      alt="image_of_horizon"
      id="horizon_image_large"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/horizon.png"
    />
    <img
      alt="image_of_horizon"
      id="horizon_image_small"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/horizon_mobile.png"
    />
  </div>
</React.Fragment>
`);
});

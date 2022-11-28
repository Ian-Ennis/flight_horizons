import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Components/Home";

// Inline snapshot test for <Home /> component
const launches = [
  {
    name: "",
    provider: { name: "" },
    launch_description: "",
    vehicle: { name: "" },
    pad: {
      name: "",
      location: {
        name: "",
        state: "",
        statename: "",
        country: "",
      },
    },
  },
];

const index = 0;

it("matches the snapshot", () => {
  render(<Home launches={launches} index={index} />);
  const homeComponent = screen.getByTestId("home_component");

  expect(homeComponent).toMatchInlineSnapshot(`
<div
  data-testid="home_component"
>
  <div
    id="home_title_container"
  >
    <img
      alt="flight_horizons_title"
      id="home_title"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/title.png"
    />
  </div>
  <div
    id="launch_container"
  >
    <div
      id="launch_description_container"
    >
      <p>
        Provider: 
      </p>
      <p>
        Mission: 
      </p>
    </div>
    <div
      id="carousel"
      style="display: block; width: 700px; padding: 30px;"
    >
      <div
        class="carousel slide"
      >
        <div
          class="carousel-inner"
        >
          <div
            class="active carousel-item"
          >
            <p
              style="text-align: center; font-size: 22px; text-shadow: #ffb90069 0px 0px 12px, #ffb90069 0px 0px 12px; margin-bottom: 20px;"
            >
              Invalid Date
              , 
              Invalid Date
               
              Invalid Date
              , 
              Invalid Date
               (MT)
            </p>
            <div
              id="vehicle_image_container"
            >
              <img
                alt="launch_vehicle"
                id="vehicle_image"
                src=""
              />
            </div>
            <div
              class="carousel-caption"
            >
              <h5
                style="text-align: center;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="launchpad_container"
    >
      <p>
        Launch Pad: TBD
      </p>
    </div>
  </div>
  <div
    id="filler_container"
  />
  <div
    id="horizon_container"
  >
    <img
      alt="image_of_horizon_for_desktop"
      id="horizon_image_large"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/horizon.png"
    />
    <img
      alt="image_of_horizon_for_mobile"
      id="horizon_image_small"
      src="https://flight-horizons.s3.us-west-2.amazonaws.com/horizon_mobile.png"
    />
  </div>
</div>
`);
});

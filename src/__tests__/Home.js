import React from "react";
import { render, screen } from '@testing-library/react'
import ShallowRenderer from "react-test-renderer/shallow";
import Home from "../Components/Home";


const launches = [
  {
    name: "launch_name_example",
    provider: { name: "provider_name_example" },
    launch_description: "launch_description_example",
    vehicle: { name: "launch_vehicle_example" },
    pad: {
      name: "SLC-40",
      location: {
        name: "Cape Canaveral SFS",
        state: "FL",
        statename: "Florida",
        country: "United States",
      },
    },
  },
];

const index = 0;

describe("the home component elements", () => {
  it('renders the home screen title', () => {
    render(<Home launches={launches} index={index}/>)
    const titleImage = screen.getByAltText('flight_horizons_title')

    expect(titleImage).toBeInTheDocument()
    expect(titleImage).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/title.png')
  })
  
  it('renders the horizon image', () => {
    render(<Home launches={launches} index={index}/>)
    const horizonImageLarge = screen.getByAltText('image_of_horizon_for_desktop')
    const horizonImageSmall = screen.getByAltText('image_of_horizon_for_mobile')

    expect(horizonImageLarge).toBeInTheDocument()
    expect(horizonImageLarge).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/horizon.png')

    expect(horizonImageSmall).toBeInTheDocument()
    expect(horizonImageSmall).toHaveAttribute('src', 'https://flight-horizons.s3.us-west-2.amazonaws.com/horizon_mobile.png')
  })

  it("Matches snapshot", () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Home />)
    expect(result).toMatchInlineSnapshot(`
<React.Fragment>
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
</React.Fragment>
`);
  });
})

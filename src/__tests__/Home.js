import React from "react";
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import { shallow } from "enzyme";
import Home from "../Components/Home";

Enzyme.configure({ adapter: new Adapter() })

// horizon images changes based on screen size

describe("<Home />", () => {
  it("renders the title image", () => {
    const shallowHomeComponent = shallow(<Home />);
    expect(shallowHomeComponent).toMatchInlineSnapshot(`
<Fragment>
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
</Fragment>
`)
  });
})

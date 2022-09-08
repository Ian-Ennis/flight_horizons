import { useState } from "react";
import LaunchCarousel from "./LaunchCarousel";
import LaunchPad from "./LaunchPad";
import LaunchDescription from "./LaunchDescription";

function Home({ launches }) {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  return (
    <>
      <div id="home_title_container">
        <img
          id="home_title"
          src="https://flight-horizons.s3.us-west-2.amazonaws.com/title.png"
          alt="flight_horizons"
        />
      </div>

      <div id="launch_container">
        <LaunchDescription launches={launches} index={index} />

        <LaunchCarousel launches={launches} handleSelect={handleSelect} />

        <LaunchPad launches={launches} index={index} />
      </div>

      <div id="filler_container"></div>

      <div id="horizon_container">
        <img
          id="horizon_image_large"
          src="https://flight-horizons.s3.us-west-2.amazonaws.com/horizon.png"
          alt="image_of_horizon"
        />
        <img
          id="horizon_image_small"
          src="https://flight-horizons.s3.us-west-2.amazonaws.com/horizon_mobile.png"
          alt="image_of_horizon"
        />
      </div>
    </>
  );
}

export default Home;

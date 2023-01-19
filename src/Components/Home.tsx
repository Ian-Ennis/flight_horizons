import React from 'react'
import { useState } from "react";
import LaunchDescription from "./LaunchDescription";
import LaunchCarousel from "./LaunchCarousel";
import LaunchPad from "./LaunchPad";

interface LaunchesProps {
  launches: EachLaunch[];
} 

interface EachLaunch {
  sort_date: number;
  name: string;
  provider: {
    name: string;
  }
  vehicle: {
    name: string;
  };
  pad: {
    name: string;
    location: {
      name: string;
      state: string,
      country: string;
    }
  }
  launch_description: string;
}

// Rendered after initial page load
function Home({ launches } : LaunchesProps ) {
  const [index, setIndex] = useState<number>(0);
  
  function handleSelect(selectedIndex: number) {
    setIndex(selectedIndex);
  }

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();

    console.log('click to animation')
  }

  return (
    <div data-testid="home_component">
      <div id="home_title_container">
        <img
          id="home_title"
          src="https://flight-horizons.s3.us-west-2.amazonaws.com/title.png"
          alt="flight_horizons_title"
          onClick={handleClick}
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
          alt="image_of_horizon_for_desktop"
        />
        <img
          id="horizon_image_small"
          src="https://flight-horizons.s3.us-west-2.amazonaws.com/horizon_mobile.png"
          alt="image_of_horizon_for_mobile"
        />
      </div>
    </div>
  );
}

export default Home;

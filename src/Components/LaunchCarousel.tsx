import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  launches: EachCarouselLaunch[];
  handleSelect: (...args: any[]) => any
} 

interface EachCarouselLaunch {
  sort_date: number;
  name: string;
  provider: object;
  vehicle: {
    name: string;
  }
  pad: object;
}

function LaunchCarousel({ launches, handleSelect } : Props ) {
  const launchesMap = launches.map((launch) => {

    let vehicleImage = "";

    // Launch vehicle images
    const vehicleImages : { [key: string] : string } = {
      "Falcon 9" : "https://flight-horizons.s3.us-west-2.amazonaws.com/falcon9.png",
      "Super Heavy / Starship Prototype" : "https://flight-horizons.s3.us-west-2.amazonaws.com/super_heavy.png",
      "Falcon Heavy" : "https://flight-horizons.s3.us-west-2.amazonaws.com/falcon_heavy.png",
      "SLS" : "https://flight-horizons.s3.us-west-2.amazonaws.com/artemis_sls.png",
      "RS1" : "https://flight-horizons.s3.us-west-2.amazonaws.com/abl_rs1.png",
      "Ariane 5" : "https://flight-horizons.s3.us-west-2.amazonaws.com/ariane5.png",
      "Alpha" : "https://flight-horizons.s3.us-west-2.amazonaws.com/firefly_alpha.png",
      "Atlas V" : "https://flight-horizons.s3.us-west-2.amazonaws.com/ula_atlas_v.png",
      "Soyuz-2" : "https://flight-horizons.s3.us-west-2.amazonaws.com/soyuz_2.png",
      "Delta IV Heavy" : "https://flight-horizons.s3.us-west-2.amazonaws.com/ula_delta_iv.png",
      "PSLV" : "https://flight-horizons.s3.us-west-2.amazonaws.com/isro_pslv.png",
      "Electron" : "https://flight-horizons.s3.us-west-2.amazonaws.com/rklb_electron.png",
      "Terran 1" : "https://flight-horizons.s3.us-west-2.amazonaws.com/terran_1.png",
      "Antares" : "https://flight-horizons.s3.us-west-2.amazonaws.com/antares.png",
      "Vega C" : "https://flight-horizons.s3.us-west-2.amazonaws.com/Vega-C.png",
      "Epsilon" : "https://flight-horizons.s3.us-west-2.amazonaws.com/JAXA_Epsilon.png",
      "Proton-M" : "https://flight-horizons.s3.us-west-2.amazonaws.com/Proton-M.png",
      "GSLV-III" : "https://flight-horizons.s3.us-west-2.amazonaws.com/ISRO_GSLV-III.png",
      "LauncherOne" : "https://flight-horizons.s3.us-west-2.amazonaws.com/virgin_orbit_launcher_one.png",
      "Long March 5B" : "https://flight-horizons.s3.us-west-2.amazonaws.com/Long_March_5B.png",
    }

    for (let key in vehicleImages) {
      if (launch.vehicle.name === key) {
        vehicleImage = vehicleImages[key]
      }
    }

    // Launch dates and times
    const unixTimestamp = launch.sort_date * 1000;
    const dateObject = new Date(unixTimestamp);
    const launchDay = dateObject.toLocaleString("en-US", { weekday: "long" });
    const launchMonth = dateObject.toLocaleString("en-US", { month: "long" });
    const launchDate = dateObject.toLocaleString("en-US", { day: "numeric" });
    const launchTime = dateObject.toLocaleTimeString();

    return (
      <Carousel.Item key={uuidv4()}>
        <p style={{ textAlign: "center", fontSize: 22, textShadow: "#ffb90069 0px 0px 12px, #ffb90069 0px 0px 12px", marginBottom: "20px"}}>
          {launchDay}, {launchMonth} {launchDate}, {launchTime} (MT)
        </p>
        <div id="vehicle_image_container">
          <img id="vehicle_image" src={vehicleImage} alt="launch_vehicle" />
        </div>
        <Carousel.Caption>
          <h5 style={{ textAlign: "center" }}>{launch.vehicle.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  // Bootstrap Carousel (custom next/previous indicators specified in index.css)
  return (
    <div id="carousel" style={{ display: "block", width: 700, padding: 30 }}>
      <Carousel
        interval={null}
        indicators={false}
        wrap={false}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        onSelect={handleSelect}
      >{launchesMap}</Carousel>
    </div>
  );
}

export default LaunchCarousel;

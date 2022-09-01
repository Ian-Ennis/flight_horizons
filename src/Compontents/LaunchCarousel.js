import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

function LaunchCarousel({ futureLaunches, handleSelect }) {

  const futureLaunch = futureLaunches.map((launch) => {
    let launchImage = "";

    if (launch.provider.name === "SpaceX" && launch.vehicle.name === "Falcon 9") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/falcon9.png`
    } else if (launch.provider.name === "SpaceX" && launch.vehicle.name === "Super Heavy / Starship Prototype") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/super_heavy.png`
    } else if (launch.provider.name === "SpaceX" && launch.vehicle.name === "Falcon Heavy") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/falcon_heavy.png`
    } else if (launch.provider.name === "NASA" && launch.vehicle.name === "SLS") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/artemis_sls.png` 
    } else if (launch.provider.name === "ABL Space" && launch.vehicle.name === "RS1") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/abl_rs1.png`
    } else if (launch.provider.name === "Arianespace" && launch.vehicle.name === "Ariane 5") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/ariane5.png`
    } else if (launch.provider.name === "Firefly" && launch.vehicle.name === "Alpha") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/firefly_alpha.png`
    } else if (launch.provider.name === "United Launch Alliance (ULA)" && launch.vehicle.name === "Atlas V") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/ula_atlas_v.png`
    } else if (launch.provider.name === "Roscosmos" && launch.vehicle.name === "Soyuz-2") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/soyuz_2.png`
    } else if (launch.provider.name === "United Launch Alliance (ULA)" && launch.vehicle.name === "Delta IV Heavy") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/ula_delta_iv.png`
    } else if (launch.provider.name === "ISRO" && launch.vehicle.name === "PSLV") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/isro_pslv.png`
    } else if (launch.provider.name === "Rocket Lab" && launch.vehicle.name === "Electron") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/rklb_electron.png`
    } else if (launch.provider.name === "Relativity Space" && launch.vehicle.name === "Terran 1") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/terran_1.png`
    } else if (launch.provider.name === "Northrop Grumman" && launch.vehicle.name === "Antares") {
      launchImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/antares.png`
    } else return null

    const unixTimestamp = launch.sort_date * 1000
    const dateObject = new Date(unixTimestamp)
    const launchDay = dateObject.toLocaleString("en-US", {weekday: "long"})
    const launchMonth = dateObject.toLocaleString("en-US", {month: "long"})
    const launchDate = dateObject.toLocaleString("en-US", {day: "numeric"})
    const launchTime = dateObject.toLocaleTimeString();

    // console.log("toDateString:", dateObject.toDateString()) 
    // console.log("toLocaleString:", dateObject.toLocaleString()) 
    // console.log("toLocaleDateString:", dateObject.toLocaleDateString()) 
    // console.log("toTimeString:", dateObject.toTimeString()) 
    // console.log("toLocaleTimeString:", dateObject.toLocaleTimeString()) 
    // console.log("toUTCString:", dateObject.toUTCString()) 
    // console.log("toString:", dateObject.toString()) 

    return (
      <Carousel.Item key={launch.id}>
        <p style={{ textAlign: "center", fontSize: 24, marginBottom: "20px" }}>{launchDay}, {launchMonth} {launchDate}, {launchTime} (MT)</p>
        <div id="vehicle_image_container">
          <img id="vehicle_image" src={launchImage} alt="launch_vehicle" />
        </div>
        <Carousel.Caption>
          <h5 style={{ textAlign: "center" }}>{launch.vehicle.name}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div id="carousel" style={{ display: "block", width: 700, padding: 30 }}>
      <Carousel interval={null} wrap={false} fade={true} onSelect={handleSelect}>{futureLaunch}</Carousel>
    </div>
  );
}

export default LaunchCarousel;

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

function LaunchCarousel({ launches, handleSelect }) {

  const launchesMap = launches.map((launch) => {
      let vehicleImage = "";

      if (launch.vehicle.name === "Falcon 9") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/falcon9.png`;
      } else if (launch.vehicle.name === "Super Heavy / Starship Prototype") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/super_heavy.png`;
      } else if (launch.vehicle.name === "Falcon Heavy") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/falcon_heavy.png`;
      } else if (launch.vehicle.name === "SLS") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/artemis_sls.png`;
      } else if (launch.vehicle.name === "RS1") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/abl_rs1.png`;
      } else if (launch.vehicle.name === "Ariane 5") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/ariane5.png`;
      } else if (launch.vehicle.name === "Alpha") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/firefly_alpha.png`;
      } else if (launch.vehicle.name === "Atlas V") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/ula_atlas_v.png`;
      } else if (launch.vehicle.name === "Soyuz-2") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/soyuz_2.png`;
      } else if (launch.vehicle.name === "Delta IV Heavy") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/ula_delta_iv.png`;
      } else if (launch.vehicle.name === "PSLV") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/isro_pslv.png`;
      } else if (launch.vehicle.name === "Electron") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/rklb_electron.png`;
      } else if (launch.vehicle.name === "Terran 1") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/terran_1.png`;
      } else if (launch.vehicle.name === "Antares") {
        vehicleImage = `https://flight-horizons.s3.us-west-2.amazonaws.com/antares.png`;
      } else return null;
      // add return div above if no launch vehicle information is present

      const unixTimestamp = launch.sort_date * 1000;
      const dateObject = new Date(unixTimestamp);
      const launchDay = dateObject.toLocaleString("en-US", { weekday: "long" });
      const launchMonth = dateObject.toLocaleString("en-US", { month: "long" });
      const launchDate = dateObject.toLocaleString("en-US", { day: "numeric" });
      const launchTime = dateObject.toLocaleTimeString();

      return (
        <Carousel.Item key={launch.id}>
          <p style={{ textAlign: "center", fontSize: 22, marginBottom: "20px" }}>{launchDay}, {launchMonth} {launchDate}, {launchTime} (MT)</p>
          <div id="vehicle_image_container">
            <img id="vehicle_image" src={vehicleImage} alt="launch_vehicle" />
          </div>
          <Carousel.Caption>
            <h5 style={{ textAlign: "center" }}>{launch.vehicle.name}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

  return (
    <div id="carousel" style={{ display: "block", width: 700, padding: 30 }}>
      <Carousel interval={null} indicators={false} wrap={false} 
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} 
        prevIcon={ <span aria-hidden="true" className="carousel-control-prev-icon" />} 
        onSelect={handleSelect}>
          {launchesMap}
      </Carousel>
    </div>
  );
}

export default LaunchCarousel;

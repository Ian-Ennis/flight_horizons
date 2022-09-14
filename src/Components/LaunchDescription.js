import React from "react";

function LaunchDescription({ launches, index }) {
  let providerWebsite;
  let missionWebsite;

  if (launches[index].provider.name === "NASA") {
    providerWebsite = `https://www.nasa.gov/`;
  } else if (launches[index].provider.name === "SpaceX") {
    providerWebsite = `https://www.spacex.com/`;
  } else if (launches[index].provider.name === "Arianespace") {
    providerWebsite = `https://www.arianespace.com/`;
  } else if (launches[index].provider.name === "ABL Space") {
    providerWebsite = `https://ablspacesystems.com/`;
  } else if (launches[index].provider.name === "Firefly") {
    providerWebsite = `https://firefly.com/`;
  } else if (launches[index].provider.name === "United Launch Alliance (ULA)") {
    providerWebsite = `https://www.ulalaunch.com/`;
  } else if (launches[index].provider.name === "Rocket Lab") {
    providerWebsite = `https://www.rocketlabusa.com/`;
  } else if (launches[index].provider.name === "Relativity Space") {
    providerWebsite = `https://www.relativityspace.com/`;
  } else if (launches[index].provider.name === "Northrop Grumman") {
    providerWebsite = `https://www.northropgrumman.com/space/`;
  } else providerWebsite = null;

  if (launches[index].name.slice(0, 7) === "Artemis") {
    missionWebsite = `https://www.nasa.gov/specials/artemis/`;
  } else if (launches[index].name.slice(0, 8) === "Starlink") {
    missionWebsite = `https://www.starlink.com/`;
  } else if (launches[index].name.slice(0, 16) === "Eutelsat Konnect") {
    missionWebsite = `https://www.eutelsat.com/satellites/future-satellites.html`;
  } else if (launches[index].name.slice(0, 3) === "RS1") {
    missionWebsite = `https://ablspacesystems.com/rs1/`;
  } else if (launches[index].name === '"To the Black"') {
    missionWebsite = `https://firefly.com/alpha-flight-2-to-the-black/`;
  } else if (launches[index].name.slice(0, 4) === "NROL") {
    missionWebsite = `https://www.nro.gov/Launch/`;
  } else if (launches[index].name.slice(0, 8) === "Oceansat") {
    missionWebsite = `https://en.wikipedia.org/wiki/Oceansat`;
  } else if (launches[index].name === '"The Owl Spreads Its Wings"') {
    missionWebsite = `https://www.rocketlabusa.com/missions/completed-missions/the-owl-spreads-its-wings/`;
  } else if (launches[index].name === '"Good Luck, Have Fun"') {
    missionWebsite = `https://www.relativityspace.com/glhf`;
  } else if (launches[index].name === "Full Stack Test Flight") {
    missionWebsite = `https://www.spacex.com/vehicles/starship/`;
  } else if (launches[index].name === "SWOT") {
    missionWebsite = `https://blogs.nasa.gov/swot/2022/08/25/swot-mission-now-targeting-dec-5/`;
  } else if (launches[index].name === "Crew-5") {
    missionWebsite = `https://blogs.nasa.gov/crew-5/`;
  } else if (launches[index].name.includes("Cygnus")) {
    missionWebsite = `https://www.northropgrumman.com/space/cygnus-spacecraft/`;
  } else if (launches[index].name.slice(0, 10) === "O3b mPower") {
    missionWebsite = `https://www.ses.com/o3b-mpower?utm_source=R%2BP_Google_Campaign&utm_medium=google_leo&utm_id=Marketing`;
  } else if (launches[index].name.slice(0, 7) === "Polaris") {
    missionWebsite = `https://polarisprogram.com/dawn/`;
  } else if (launches[index].name.slice(0, 4) === "JPSS") {
    missionWebsite = `https://www.nesdis.noaa.gov/about/our-offices/joint-polar-satellite-system-jpss-program-office`;
  } else if (launches[index].name.slice(0, 3) === "SES") {
    missionWebsite = `https://www.ses.com/`;
  } else missionWebsite = null;

  return (
    <div id="launch_description_container">
      {providerWebsite ? 
        <p>Provider: <a href={providerWebsite} target="_blank">{launches[index].provider.name}</a></p>
        : <p>Provider: {launches[index].provider.name}</p>}

      {missionWebsite ? 
        <p>Mission: <a href={missionWebsite} target="_blank">{launches[index].name}</a></p>
        : <p>Mission: {launches[index].name}</p>}

      {launches[index].launch_description ? 
        <p>{launches[index].launch_description}</p>
        : null}
    </div>
  );
}

export default LaunchDescription;

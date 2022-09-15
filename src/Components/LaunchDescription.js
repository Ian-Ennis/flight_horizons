import React from "react";

function LaunchDescription({ launches, index }) {

  let providerWebsite;
  let missionWebsite;

  const launchProviders = {
    "ABL Space" : "https://ablspacesystems.com/",
    "Arianespace" : "https://www.arianespace.com/",
    "Firefly" : "https://firefly.com/",
    "NASA": "https://www.nasa.gov/",
    "Northrop Grumman" : "https://www.northropgrumman.com/space/",
    "Relativity Space" : "https://www.relativityspace.com/",
    "Rocket Lab" : "https://www.rocketlabusa.com/",
    "SpaceX" : "https://www.spacex.com/",
    "United Launch Alliance (ULA)" : "https://www.ulalaunch.com/",
  }

  for (let key in launchProviders) {
    if (launches[index].provider.name === key) {
      providerWebsite = launchProviders[key]
    } 
  }

  const missions = {
    "Artemis" : "https://www.nasa.gov/specials/artemis/",
    "Starlink" : "https://www.starlink.com/",
    "Eutelsat Konnect" : "https://www.eutelsat.com/satellites/future-satellites.html",
    "RS1" : "https://ablspacesystems.com/rs1/",
    '"To the Black"' : "https://firefly.com/alpha-flight-2-to-the-black/",
    "NROL" : "https://www.nro.gov/Launch/",
    "Oceansat" : "https://en.wikipedia.org/wiki/Oceansat",
    '"The Owl Spreads Its Wings"' : "https://www.rocketlabusa.com/missions/completed-missions/the-owl-spreads-its-wings/",
    '"Good Luck, Have Fun"' : "https://www.relativityspace.com/glhf",
    "Full Stack Test Flight" : "https://www.spacex.com/vehicles/starship/",
    "SWOT" : "https://blogs.nasa.gov/swot/2022/08/25/swot-mission-now-targeting-dec-5/",
    "Crew-5" : "https://blogs.nasa.gov/crew-5/",
    "Cygnus" : "https://www.northropgrumman.com/space/cygnus-spacecraft/",
    "O3b mPower" : "https://www.ses.com/o3b-mpower?utm_source=R%2BP_Google_Campaign&utm_medium=google_leo&utm_id=Marketing`",
    "Polaris" : "https://polarisprogram.com/dawn/",
    "JPSS" : "https://www.nesdis.noaa.gov/about/our-offices/joint-polar-satellite-system-jpss-program-office",
    "SES" : "https://www.ses.com/",
  }

  for (let key in missions) {
    if (launches[index].name.includes(key)) {
      missionWebsite = missions[key]
    }
  }

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

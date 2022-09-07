function LaunchDescription({ launches, index}) {

    let provider = null;
    let mission = null;

    if (launches[index].provider.name === "NASA") {
        provider = `https://www.nasa.gov/` 
    } else if (launches[index].provider.name === "SpaceX") {
        provider = `https://www.spacex.com/`
    } else if (launches[index].provider.name === "Arianespace") {
        provider = `https://www.arianespace.com/`
    } else if (launches[index].provider.name === "ABL Space") {
        provider = `https://ablspacesystems.com/`
    } else if (launches[index].provider.name === "Firefly") {
        provider = `https://firefly.com/`
    } else if (launches[index].provider.name === "United Launch Alliance (ULA)") {
        provider = `https://www.ulalaunch.com/`
    } else if (launches[index].provider.name === "Rocket Lab") {
        provider = `https://www.rocketlabusa.com/`
    } else if (launches[index].provider.name === "Relativity Space") {
        provider = `https://www.relativityspace.com/`
    } else if (launches[index].provider.name === "Northrop Grumman") {
        provider = `https://www.northropgrumman.com/space/`
    } else provider = null


    if (launches[index].name.slice(0,7) === "Artemis") {
        mission = `https://www.nasa.gov/specials/artemis/`
        
    } else if (launches[index].name.slice(0,8) === "Starlink") {
        mission = `https://www.starlink.com/`

    } else if (launches[index].name.slice(0, 16) === "Eutelsat Konnect") {
        mission = `https://www.eutelsat.com/satellites/future-satellites.html`

    } else if (launches[index].name.slice(0,3) === "RS1") {
        mission = `https://ablspacesystems.com/rs1/`
        
    } else if (launches[index].name === '"To the Black"') {
        mission = `https://firefly.com/alpha-flight-2-to-the-black/`

    } else if (launches[index].name.slice(0,4) === "NROL") {
        mission = `https://www.nro.gov/Launch/`

    } else if (launches[index].name.slice(0,8) === "Oceansat") {
        mission = `https://en.wikipedia.org/wiki/Oceansat`
        
    } else if (launches[index].name === '"The Owl Spreads Its Wings"') {
        mission = `https://www.rocketlabusa.com/missions/completed-missions/the-owl-spreads-its-wings/`

    } else if (launches[index].name === '"Good Luck, Have Fun"') {
        mission = `https://www.relativityspace.com/glhf`

    } else if (launches[index].name === "Full Stack Test Flight") {
        mission = `https://www.spacex.com/vehicles/starship/`
    
    } else if (launches[index].name === "SWOT") {
        mission = `https://blogs.nasa.gov/swot/2022/08/25/swot-mission-now-targeting-dec-5/`

    } else if (launches[index].name === "Crew-5") {
        mission = `https://blogs.nasa.gov/crew-5/`

    } else if (launches[index].name.includes("Cygnus")) {
        mission = `https://www.northropgrumman.com/space/cygnus-spacecraft/`

    } else if (launches[index].name.slice(0,10) === "O3b mPower") {
        mission = `https://www.ses.com/o3b-mpower?utm_source=R%2BP_Google_Campaign&utm_medium=google_leo&utm_id=Marketing`

    } else if (launches[index].name.slice(0,7) === "Polaris") {
        mission = `https://polarisprogram.com/dawn/`

    } else if (launches[index].name.slice(0,4) === "JPSS") {
        mission = `https://www.nesdis.noaa.gov/about/our-offices/joint-polar-satellite-system-jpss-program-office`

    } else if (launches[index].name.slice(0,3) === "SES") {
        mission = `https://www.ses.com/`
    }

    return (
        <div id="launch_description_container">
            <p>Provider: <a href={provider} target="_blank">{launches[index].provider.name}</a></p>
            <p>Mission: <a href={mission} target="_blank">{launches[index].name}</a></p>
            <p>{launches[index].launch_description}</p>
        </div>
    )
}

export default LaunchDescription
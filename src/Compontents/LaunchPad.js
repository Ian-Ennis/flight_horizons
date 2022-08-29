function LaunchPad({ futureLaunches, index }) {

  let padImage = "";

  if (futureLaunches[index].pad.name === "SLC-4E") {
    padImage = `https://imgur.com/Jv31VwV.png`
  } else if (futureLaunches[index].pad.name === "LC-39B") {
    padImage = `https://imgur.com/F7R24aa.png`
  } else if (futureLaunches[index].pad.name === "LP-3C") {
    padImage = `https://imgur.com/F2vY1B2.png`
  } else if (futureLaunches[index].pad.name === "ELA-3") {
    padImage = `https://imgur.com/TVwdkHL.png`
  } else if (futureLaunches[index].pad.name === "LC-39A") {
    padImage = `https://imgur.com/ZJIHSzS.png`
  } else if (futureLaunches[index].pad.name === "SLC-2W") {
    padImage = `https://imgur.com/orcA8qX.png`
  } else if (futureLaunches[index].pad.name === "LC-31/6") {
    padImage = `https://imgur.com/XCv0e4W.png`
  } else if (futureLaunches[index].pad.name === "SLC-6") {
    padImage = `https://imgur.com/7dptYMa.png`
  } else if (futureLaunches[index].pad.name === "FLP") {
    padImage = `https://imgur.com/G0H9yBJ.png`
  } else if (futureLaunches[index].pad.name === "SLC-41") {
    padImage = `https://imgur.com/CJdeB2K.png`
  } else if (futureLaunches[index].pad.name === "LC-1A") {
    padImage = `https://imgur.com/3FUMgmF.png`
  } else if (futureLaunches[index].pad.name === "SLC-16") {
    padImage = `https://imgur.com/HFS7Ooq.png`
  } else if (futureLaunches[index].pad.name === "Launch Pad") {
    padImage = `https://imgur.com/Zxkkgqz.png`
  } else if (futureLaunches[index].pad.name === "Launch Pad") {
    padImage = `https://imgur.com/Zxkkgqz.png`
  } else if (futureLaunches[index].pad.name === "LC-39A") {
    padImage = `https://imgur.com/mPnkR2s.png`
  } else if (futureLaunches[index].pad.name === "Pad 0A") {
    padImage = `https://imgur.com/09P1t19.png`
  } else if (futureLaunches[index].pad.name === "SLC-3E") {
    padImage = `https://imgur.com/41CTQ5A.png`
  } else if (futureLaunches[index].pad.name === "SLC-40") {
    padImage = `https://imgur.com/ZWbkVJu.png`
  } else if (futureLaunches[index].pad.name === "USSF-67") {
    padImage = `https://imgur.com/ZWbkVJu.png`
  } else padImage = "";

  return (
    <div id="launchpad_container">
      <p>Launch Pad: {futureLaunches[index].pad.name}</p>
      <p>Facility: {futureLaunches[index].pad.location.name}</p>
      {futureLaunches[index].pad.location.state ? <p>State: {futureLaunches[index].pad.location.state}</p> : null}
      {futureLaunches[index].pad.location.country ? <p>Country: {futureLaunches[index].pad.location.country}</p> : null}
      {padImage.length ? <img id="launchpad_image" src={padImage} alt="launchpad_image"/> : null}
    </div>
  )
}

export default LaunchPad


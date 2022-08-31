function LaunchPad({ futureLaunches, index }) {

  let padImage = null;
  let googleSatellite = null;

  if (futureLaunches[index].pad.name === "SLC-4E") {
    padImage = `https://imgur.com/Jv31VwV.png`
    googleSatellite = `https://www.google.com/maps/place/34%C2%B037'55.2%22N+120%C2%B036'39.6%22W/@34.6326513,-120.6134089,3273m/data=!3m1!1e3!4m5!3m4!1s0x0:0x46c82463d6e51a3e!8m2!3d34.632!4d-120.611`
  } else if (futureLaunches[index].pad.name === "SLC-2W") {
    padImage = `https://imgur.com/oG2xwEA.png`
    googleSatellite = `https://www.google.com/maps/place/34%C2%B045'20.2%22N+120%C2%B037'20.6%22W/@34.756192,-120.6236929,2431m/data=!3m1!1e3!4m5!3m4!1s0x0:0xedde76a22bfa9298!8m2!3d34.7556!4d-120.6224`
  } else if (futureLaunches[index].pad.name === "SLC-6") {
    padImage = `https://imgur.com/7dptYMa.png`
    googleSatellite = `https://www.google.com/maps/place/34%C2%B034'53.4%22N+120%C2%B037'34.3%22W/@34.5819953,-120.6276412,2722m/data=!3m1!1e3!4m5!3m4!1s0x0:0xc7e9eb48cc2a0b37!8m2!3d34.5815!4d-120.6262`
  } else if (futureLaunches[index].pad.name === "SLC-41") {
    padImage = `https://imgur.com/CJdeB2K.png`
    googleSatellite = `https://www.google.com/maps/place/28%C2%B035'00.3%22N+80%C2%B034'58.9%22W/@28.583997,-80.5844624,2823m/data=!3m1!1e3!4m5!3m4!1s0x0:0x71fc2f7a27dc7ca9!8m2!3d28.5834103!4d-80.5830364`
  } else if (futureLaunches[index].pad.name === "SLC-16") {
    padImage = `https://imgur.com/HFS7Ooq.png`
    googleSatellite = `https://www.google.com/maps/place/28%C2%B030'05.9%22N+80%C2%B033'06.5%22W/@28.5021595,-80.5529906,2377m/data=!3m1!1e3!4m5!3m4!1s0x0:0xd347c89055bb9a44!8m2!3d28.501626!4d-80.5518`
  } else if (futureLaunches[index].pad.name === "SLC-3E") {
    padImage = `https://imgur.com/c9raECv.png`
    googleSatellite = `https://www.google.com/maps/place/Vandenberg+AFB+Space+Launch+Complex+3+-+East/@34.641012,-120.5911593,3173m/data=!3m1!1e3!4m5!3m4!1s0x0:0x2f5c18f8f6ff6fa4!8m2!3d34.640274!4d-120.5894241`
  } else if (futureLaunches[index].pad.name === "SLC-40") {
    padImage = `https://imgur.com/ZWbkVJu.png`
    googleSatellite = `https://www.google.com/maps/place/28%C2%B033'43.0%22N+80%C2%B034'38.5%22W/@28.5626514,-80.5787373,2772m/data=!3m1!1e3!4m5!3m4!1s0x0:0x70353824374c679!8m2!3d28.5619412!4d-80.5773574`
  } else if (futureLaunches[index].pad.name === "LC-39B") {
    padImage = `https://imgur.com/F7R24aa.png`
    googleSatellite = `https://www.google.com/maps/place/28%C2%B037'37.6%22N+80%C2%B037'15.7%22W/@28.6277208,-80.6229169,3049m/data=!3m1!1e3!4m5!3m4!1s0x0:0x79f07f8255fb5576!8m2!3d28.6271123!4d-80.621015`
  } else if (futureLaunches[index].pad.name === "LC-39A") {
    padImage = `https://imgur.com/ZJIHSzS.png`
    googleSatellite = `https://www.google.com/maps/place/28%C2%B036'29.6%22N+80%C2%B036'15.4%22W/@28.6094139,-80.607423,6015m/data=!3m1!1e3!4m5!3m4!1s0x0:0xaa22c21cf36c5032!8m2!3d28.6082268!4d-80.6042819`
  } else if (futureLaunches[index].pad.name === "LC-31/6") {
    padImage = `https://imgur.com/Sk9SPMz.png`
    googleSatellite = `https://www.google.com/maps/place/45%C2%B059'45.7%22N+63%C2%B033'50.4%22E/@45.9964125,63.5628732,1756m/data=!3m1!1e3!4m5!3m4!1s0x0:0xaf6f988fd13e56c7!8m2!3d45.996034!4d63.564003`
  } else if (futureLaunches[index].pad.name === "LP-3C") {
    padImage = `https://imgur.com/WVJEBw6.png`
    googleSatellite = `https://www.google.com/maps/place/57%C2%B025'52.5%22N+152%C2%B021'02.7%22W/@57.4316546,-152.3522727,1716m/data=!3m1!1e3!4m5!3m4!1s0x0:0xbd6a9f3cae1c5e60!8m2!3d57.431239!4d-152.350749`
  } else if (futureLaunches[index].pad.name === "ELA-3") {
    padImage = `https://imgur.com/SH5YvyT.png`
    googleSatellite = `https://www.google.com/maps/place/5%C2%B014'20.4%22N+52%C2%B046'04.8%22W/@5.2403329,-52.7701385,4565m/data=!3m1!1e3!4m5!3m4!1s0x0:0x8b5a6bc38a9fa69d!8m2!3d5.239!4d-52.768`
  } else if (futureLaunches[index].pad.name === "FLP") {
    padImage = `https://imgur.com/G0H9yBJ.png`
    googleSatellite = `https://www.google.com/maps/place/13%C2%B043'58.8%22N+80%C2%B014'06.0%22E/@13.7340042,80.2333896,3633m/data=!3m1!1e3!4m5!3m4!1s0x0:0x1af6e3ea87701f20!8m2!3d13.733!4d80.235`
  } else if (futureLaunches[index].pad.name === "LC-1A") {
    padImage = `https://imgur.com/OT0Kwry.png`
    googleSatellite = `https://www.google.com/maps/place/39%C2%B015'46.2%22S+177%C2%B051'52.1%22E/@-39.261433,177.8645107,1166m/data=!3m1!1e3!4m5!3m4!1s0x0:0x73f45b9817cb1816!8m2!3d-39.262833!4d177.864469`
  } else if (futureLaunches[index].pad.name === "Launch Pad") {
    padImage = `https://imgur.com/Zxkkgqz.png`
    googleSatellite = `https://www.google.com/maps/place/25%C2%B059'49.6%22N+97%C2%B009'18.1%22W/@25.9978261,-97.1563054,2713m/data=!3m1!1e3!4m5!3m4!1s0x0:0xd397350c75f04b78!8m2!3d25.997116!4d-97.155031`
  }  else if (futureLaunches[index].pad.name === "LC-39A") {
    padImage = `https://imgur.com/mPnkR2s.png`
    googleSatellite = `https://www.google.com/maps/place/Launch+Pad+39A/@28.6087152,-80.6058538,3112m/data=!3m1!1e3!4m12!1m6!3m5!1s0x0:0x5b7fc6372378346d!2sKennedy+Space+Center+Launch+Complex+39b!8m2!3d28.6263826!4d-80.6204703!3m4!1s0x88e0bbcacef2d2cd:0x25eb79aabef8827d!8m2!3d28.608325!4d-80.6039429`
  } else if (futureLaunches[index].pad.name === "Pad 0A") {
    padImage = `https://imgur.com/09P1t19.png`
    googleSatellite = `https://www.google.com/maps/place/37%C2%B050'01.3%22N+75%C2%B029'17.2%22W/@37.8342969,-75.4896529,2355m/data=!3m1!1e3!4m5!3m4!1s0x0:0x58e106427980c28a!8m2!3d37.8337!4d-75.4881`
  } else {
    padImage = null 
    googleSatellite = null
  }

  return (
    <div id="launchpad_container">
      <p>Launch Pad: <a href={googleSatellite} target="_blank">{futureLaunches[index].pad.name}</a></p>
      <p>Facility: {futureLaunches[index].pad.location.name}</p>
      {(futureLaunches[index].pad.location.country && futureLaunches[index].pad.location.state) ? <p>{futureLaunches[index].pad.location.country} ({futureLaunches[index].pad.location.state})</p> : null}
      {(futureLaunches[index].pad.location.country && !futureLaunches[index].pad.location.state) ? <p>{futureLaunches[index].pad.location.country}</p> : null}
      {padImage ? <img id="launchpad_image" src={padImage} alt="launchpad_image"/> : null}
    </div>
  )
}

export default LaunchPad


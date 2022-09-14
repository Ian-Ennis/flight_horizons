import React from 'react';

function LaunchPad({ launches, index }) {

  let googleSatellite;
  let facilityWiki;
  let padImage;

  if (launches[index].pad.name === "SLC-4E") {
    googleSatellite = `https://www.google.com/maps/place/34%C2%B037'55.2%22N+120%C2%B036'39.6%22W/@34.6326513,-120.6134089,3273m/data=!3m1!1e3!4m5!3m4!1s0x0:0x46c82463d6e51a3e!8m2!3d34.632!4d-120.611`
    facilityWiki = `https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_4`
    padImage = `https://imgur.com/Jv31VwV.png`

  } else if (launches[index].pad.name === "SLC-2W") {
    googleSatellite = `https://www.google.com/maps/place/34%C2%B045'20.2%22N+120%C2%B037'20.6%22W/@34.756192,-120.6236929,2431m/data=!3m1!1e3!4m5!3m4!1s0x0:0xedde76a22bfa9298!8m2!3d34.7556!4d-120.6224`
    facilityWiki = `https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_2`
    padImage = `https://imgur.com/oG2xwEA.png`

  } else if (launches[index].pad.name === "SLC-6") {
    googleSatellite = `https://www.google.com/maps/place/34%C2%B034'53.4%22N+120%C2%B037'34.3%22W/@34.5819953,-120.6276412,2722m/data=!3m1!1e3!4m5!3m4!1s0x0:0xc7e9eb48cc2a0b37!8m2!3d34.5815!4d-120.6262`
    facilityWiki = `https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_6`
    padImage = `https://imgur.com/7dptYMa.png`

  } else if (launches[index].pad.name === "SLC-41") {
    googleSatellite = `https://www.google.com/maps/place/28%C2%B035'00.3%22N+80%C2%B034'58.9%22W/@28.583997,-80.5844624,2823m/data=!3m1!1e3!4m5!3m4!1s0x0:0x71fc2f7a27dc7ca9!8m2!3d28.5834103!4d-80.5830364`
    facilityWiki = `https://en.wikipedia.org/wiki/Cape_Canaveral_Space_Launch_Complex_41`
    padImage = `https://imgur.com/CJdeB2K.png`

  } else if (launches[index].pad.name === "SLC-16") {
    googleSatellite = `https://www.google.com/maps/place/28%C2%B030'05.9%22N+80%C2%B033'06.5%22W/@28.5021595,-80.5529906,2377m/data=!3m1!1e3!4m5!3m4!1s0x0:0xd347c89055bb9a44!8m2!3d28.501626!4d-80.5518`
    facilityWiki = `https://en.wikipedia.org/wiki/Cape_Canaveral_Launch_Complex_16`
    padImage = `https://imgur.com/HFS7Ooq.png`

  } else if (launches[index].pad.name === "SLC-3E") {
    googleSatellite = `https://www.google.com/maps/place/Vandenberg+AFB+Space+Launch+Complex+3+-+East/@34.641012,-120.5911593,3173m/data=!3m1!1e3!4m5!3m4!1s0x0:0x2f5c18f8f6ff6fa4!8m2!3d34.640274!4d-120.5894241`
    facilityWiki = `https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_3`
    padImage = `https://imgur.com/c9raECv.png`

  } else if (launches[index].pad.name === "SLC-40") {
    googleSatellite = `https://www.google.com/maps/place/28%C2%B033'43.0%22N+80%C2%B034'38.5%22W/@28.5626514,-80.5787373,2772m/data=!3m1!1e3!4m5!3m4!1s0x0:0x70353824374c679!8m2!3d28.5619412!4d-80.5773574`
    facilityWiki = `https://en.wikipedia.org/wiki/Cape_Canaveral_Space_Launch_Complex_40`
    padImage = `https://imgur.com/ZWbkVJu.png`

  } else if (launches[index].pad.name === "LC-39B") {
    googleSatellite = `https://www.google.com/maps/place/28%C2%B037'37.6%22N+80%C2%B037'15.7%22W/@28.6277208,-80.6229169,3049m/data=!3m1!1e3!4m5!3m4!1s0x0:0x79f07f8255fb5576!8m2!3d28.6271123!4d-80.621015`
    facilityWiki = `https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39B`
    padImage = `https://imgur.com/F7R24aa.png`

  } else if (launches[index].pad.name === "LC-39A") {
    googleSatellite = `https://www.google.com/maps/place/28%C2%B036'29.6%22N+80%C2%B036'15.4%22W/@28.6094139,-80.607423,6015m/data=!3m1!1e3!4m5!3m4!1s0x0:0xaa22c21cf36c5032!8m2!3d28.6082268!4d-80.6042819`
    facilityWiki = `https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39A`
    padImage = `https://imgur.com/ZJIHSzS.png`

  } else if (launches[index].pad.name === "LC-31/6") {
    googleSatellite = `https://www.google.com/maps/place/45%C2%B059'45.7%22N+63%C2%B033'50.4%22E/@45.9964125,63.5628732,1756m/data=!3m1!1e3!4m5!3m4!1s0x0:0xaf6f988fd13e56c7!8m2!3d45.996034!4d63.564003`
    facilityWiki = `https://en.wikipedia.org/wiki/Baikonur_Cosmodrome_Site_31`
    padImage = `https://imgur.com/Sk9SPMz.png`

  } else if (launches[index].pad.name === "LP-3C") {
    googleSatellite = `https://www.google.com/maps/place/57%C2%B025'52.5%22N+152%C2%B021'02.7%22W/@57.4316546,-152.3522727,1716m/data=!3m1!1e3!4m5!3m4!1s0x0:0xbd6a9f3cae1c5e60!8m2!3d57.431239!4d-152.350749`
    facilityWiki = `https://en.wikipedia.org/wiki/Pacific_Spaceport_Complex_%E2%80%93_Alaska`
    padImage = `https://imgur.com/WVJEBw6.png`

  } else if (launches[index].pad.name === "ELA-3") {
    googleSatellite = `https://www.google.com/maps/place/5%C2%B014'20.4%22N+52%C2%B046'04.8%22W/@5.2403329,-52.7701385,4565m/data=!3m1!1e3!4m5!3m4!1s0x0:0x8b5a6bc38a9fa69d!8m2!3d5.239!4d-52.768`
    facilityWiki = `https://en.wikipedia.org/wiki/Guiana_Space_Centre`
    padImage = `https://imgur.com/SH5YvyT.png`

  } else if (launches[index].pad.name === "FLP") {
    googleSatellite = `https://www.google.com/maps/place/13%C2%B043'58.8%22N+80%C2%B014'06.0%22E/@13.7340042,80.2333896,3633m/data=!3m1!1e3!4m5!3m4!1s0x0:0x1af6e3ea87701f20!8m2!3d13.733!4d80.235`
    facilityWiki = `https://en.wikipedia.org/wiki/Satish_Dhawan_Space_Centre`
    padImage = `https://imgur.com/G0H9yBJ.png`

  } else if (launches[index].pad.name === "LC-1A") {
    googleSatellite = `https://www.google.com/maps/place/39%C2%B015'46.2%22S+177%C2%B051'52.1%22E/@-39.261433,177.8645107,1166m/data=!3m1!1e3!4m5!3m4!1s0x0:0x73f45b9817cb1816!8m2!3d-39.262833!4d177.864469`
    facilityWiki = `https://en.wikipedia.org/wiki/Rocket_Lab_Launch_Complex_1`
    padImage = `https://imgur.com/OT0Kwry.png`

  } else if (launches[index].pad.name === "Launch Pad") {
    googleSatellite = `https://www.google.com/maps/place/25%C2%B059'49.6%22N+97%C2%B009'18.1%22W/@25.9978261,-97.1563054,2713m/data=!3m1!1e3!4m5!3m4!1s0x0:0xd397350c75f04b78!8m2!3d25.997116!4d-97.155031`
    facilityWiki = `https://en.wikipedia.org/wiki/SpaceX_Starbase`
    padImage = `https://imgur.com/Zxkkgqz.png`

  } else if (launches[index].pad.name === "Pad 0A") {
    googleSatellite = `https://www.google.com/maps/place/37%C2%B050'01.3%22N+75%C2%B029'17.2%22W/@37.8342969,-75.4896529,2355m/data=!3m1!1e3!4m5!3m4!1s0x0:0x58e106427980c28a!8m2!3d37.8337!4d-75.4881`
    facilityWiki = `https://en.wikipedia.org/wiki/Mid-Atlantic_Regional_Spaceport_Launch_Pad_0#:~:text=Launch%20Pad%200%20(LP%2D0,the%20launch%20complex%20until%202003.`
    padImage = `https://imgur.com/09P1t19.png`

  } else {
    googleSatellite = null
    facilityWiki = null
    padImage = null 
  }

  return (
    <div id="launchpad_container">
      {googleSatellite ? 
        <p>Launch Pad: <a href={googleSatellite} target="_blank">{launches[index].pad.name}</a></p>
        : <p>Launch Pad: TBD</p>}

      {facilityWiki ? 
      <p>Facility: <a href={facilityWiki} target="_blank">{launches[index].pad.location.name}</a></p>
        : null}

      {(launches[index].pad.location.country && launches[index].pad.location.state) ? 
      <p>{launches[index].pad.location.country} ({launches[index].pad.location.state})</p> 
        : null}

      {(launches[index].pad.location.country && !launches[index].pad.location.state) ? 
      <p>{launches[index].pad.location.country}</p> 
        : null}
        
      {padImage ? <img id="launchpad_image" src={padImage} alt="launchpad_image"/> 
        : null}
    </div>
  )
}

export default LaunchPad


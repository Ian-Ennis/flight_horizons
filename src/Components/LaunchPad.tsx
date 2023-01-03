import React from 'react';

interface Props {
  launches: EachPadLaunch[];
  index: number;
}

interface EachPadLaunch {
  pad: {
    name: string;
    location: {
      name: string;
      state: string,
      country: string;
    }
  }
}

function LaunchPad({ launches, index } : Props) {

  let googleSatellite;
  let facilityWiki;
  let padImage;

  // Launch pad google satellite images, informational webpages, and pad photographs
  const launchPads : { [index: string] : { google: string | null, wiki: string, img: string } } = {
    "SLC-4E": {
      google: "https://www.google.com/maps/place/34%C2%B037'55.2%22N+120%C2%B036'39.6%22W/@34.6326513,-120.6134089,3273m/data=!3m1!1e3!4m5!3m4!1s0x0:0x46c82463d6e51a3e!8m2!3d34.632!4d-120.611",
      wiki: "https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_4",
      img: "https://imgur.com/Jv31VwV.png",
    },
    "SLC-2W" : {
      google: "https://www.google.com/maps/place/34%C2%B045'20.2%22N+120%C2%B037'20.6%22W/@34.756192,-120.6236929,2431m/data=!3m1!1e3!4m5!3m4!1s0x0:0xedde76a22bfa9298!8m2!3d34.7556!4d-120.6224",
      wiki: "https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_2",
      img: "https://imgur.com/oG2xwEA.png",
    },
    "SLC-6" : {
      google: "https://www.google.com/maps/place/34%C2%B034'53.4%22N+120%C2%B037'34.3%22W/@34.5819953,-120.6276412,2722m/data=!3m1!1e3!4m5!3m4!1s0x0:0xc7e9eb48cc2a0b37!8m2!3d34.5815!4d-120.6262",
      wiki: "https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_6",
      img: "https://imgur.com/7dptYMa.png",
    },
    "SLC-41" : {
      google: "https://www.google.com/maps/place/28%C2%B035'00.3%22N+80%C2%B034'58.9%22W/@28.583997,-80.5844624,2823m/data=!3m1!1e3!4m5!3m4!1s0x0:0x71fc2f7a27dc7ca9!8m2!3d28.5834103!4d-80.5830364",
      wiki: "https://en.wikipedia.org/wiki/Cape_Canaveral_Space_Launch_Complex_41",
      img: "https://imgur.com/CJdeB2K.png",
    },
    "SLC-16" : {
      google: "https://www.google.com/maps/place/28%C2%B030'05.9%22N+80%C2%B033'06.5%22W/@28.5021595,-80.5529906,2377m/data=!3m1!1e3!4m5!3m4!1s0x0:0xd347c89055bb9a44!8m2!3d28.501626!4d-80.5518",
      wiki: "https://en.wikipedia.org/wiki/Cape_Canaveral_Launch_Complex_16",
      img: "https://imgur.com/HFS7Ooq.png",
    },
    "SLC-3E" : {
      google: "https://www.google.com/maps/place/Vandenberg+AFB+Space+Launch+Complex+3+-+East/@34.641012,-120.5911593,3173m/data=!3m1!1e3!4m5!3m4!1s0x0:0x2f5c18f8f6ff6fa4!8m2!3d34.640274!4d-120.5894241",
      wiki: "https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_3",
      img: "https://imgur.com/c9raECv.png",
    },
    "SLC-40" : {
      google: "https://www.google.com/maps/place/28%C2%B033'43.0%22N+80%C2%B034'38.5%22W/@28.5626514,-80.5787373,2772m/data=!3m1!1e3!4m5!3m4!1s0x0:0x70353824374c679!8m2!3d28.5619412!4d-80.5773574",
      wiki: "https://en.wikipedia.org/wiki/Cape_Canaveral_Space_Launch_Complex_40",
      img: "https://imgur.com/ZWbkVJu.png",
    },
    "LC-39B" : {
      google: "https://www.google.com/maps/place/28%C2%B037'37.6%22N+80%C2%B037'15.7%22W/@28.6277208,-80.6229169,3049m/data=!3m1!1e3!4m5!3m4!1s0x0:0x79f07f8255fb5576!8m2!3d28.6271123!4d-80.621015",
      wiki: "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39B",
      img: "https://imgur.com/F7R24aa.png",
    },
    "LC-39A" : {
      google: "https://www.google.com/maps/place/28%C2%B036'29.6%22N+80%C2%B036'15.4%22W/@28.6094139,-80.607423,6015m/data=!3m1!1e3!4m5!3m4!1s0x0:0xaa22c21cf36c5032!8m2!3d28.6082268!4d-80.6042819",
      wiki: "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39A",
      img: "https://imgur.com/ZJIHSzS.png",
    },
    "LC-31/6" : {
      google: "https://www.google.com/maps/place/45%C2%B059'45.7%22N+63%C2%B033'50.4%22E/@45.9964125,63.5628732,1756m/data=!3m1!1e3!4m5!3m4!1s0x0:0xaf6f988fd13e56c7!8m2!3d45.996034!4d63.564003",
      wiki: "https://en.wikipedia.org/wiki/Baikonur_Cosmodrome_Site_31",
      img: "https://imgur.com/Sk9SPMz.png",
    },
    "LP-3C" : {
      google: "https://www.google.com/maps/place/57%C2%B025'52.5%22N+152%C2%B021'02.7%22W/@57.4316546,-152.3522727,1716m/data=!3m1!1e3!4m5!3m4!1s0x0:0xbd6a9f3cae1c5e60!8m2!3d57.431239!4d-152.350749",
      wiki: "https://en.wikipedia.org/wiki/Pacific_Spaceport_Complex_%E2%80%93_Alaska",
      img: "https://imgur.com/WVJEBw6.png",
    },
    "ELA-3" : {
      google: "https://www.google.com/maps/place/5%C2%B014'20.4%22N+52%C2%B046'04.8%22W/@5.2403329,-52.7701385,4565m/data=!3m1!1e3!4m5!3m4!1s0x0:0x8b5a6bc38a9fa69d!8m2!3d5.239!4d-52.768",
      wiki: "https://en.wikipedia.org/wiki/Guiana_Space_Centre",
      img: "https://imgur.com/SH5YvyT.png",
    },
    "ELV" : {
      google: "https://www.google.com/maps/place/5%C2%B014'20.4%22N+52%C2%B046'04.8%22W/@5.2403329,-52.7701385,4565m/data=!3m1!1e3!4m5!3m4!1s0x0:0x8b5a6bc38a9fa69d!8m2!3d5.239!4d-52.768",
      wiki: "https://en.wikipedia.org/wiki/Guiana_Space_Centre",
      img: "https://imgur.com/SH5YvyT.png",
    },
    "FLP" : {
      google: "https://www.google.com/maps/place/13%C2%B043'58.8%22N+80%C2%B014'06.0%22E/@13.7340042,80.2333896,3633m/data=!3m1!1e3!4m5!3m4!1s0x0:0x1af6e3ea87701f20!8m2!3d13.733!4d80.235",
      wiki: "https://en.wikipedia.org/wiki/Satish_Dhawan_Space_Centre",
      img: "https://imgur.com/G0H9yBJ.png",
    },
    "SLP" : {
      google: "https://www.google.com/maps/place/13%C2%B043'58.8%22N+80%C2%B014'06.0%22E/@13.7340042,80.2333896,3633m/data=!3m1!1e3!4m5!3m4!1s0x0:0x1af6e3ea87701f20!8m2!3d13.733!4d80.235",
      wiki: "https://en.wikipedia.org/wiki/Satish_Dhawan_Space_Centre",
      img: "https://imgur.com/G0H9yBJ.png",
    },
    "LC-1A" : {
      google: "https://www.google.com/maps/place/39%C2%B015'46.2%22S+177%C2%B051'52.1%22E/@-39.261433,177.8645107,1166m/data=!3m1!1e3!4m5!3m4!1s0x0:0x73f45b9817cb1816!8m2!3d-39.262833!4d177.864469",
      wiki: "https://en.wikipedia.org/wiki/Rocket_Lab_Launch_Complex_1",
      img: "https://imgur.com/OT0Kwry.png",
    },
    "LC-1B" : {
      google: "https://www.google.com/maps/place/39%C2%B015'46.2%22S+177%C2%B051'52.1%22E/@-39.261433,177.8645107,1166m/data=!3m1!1e3!4m5!3m4!1s0x0:0x73f45b9817cb1816!8m2!3d-39.262833!4d177.864469",
      wiki: "https://en.wikipedia.org/wiki/Rocket_Lab_Launch_Complex_1",
      img: "https://imgur.com/OT0Kwry.png",
    },
    "Rocket Lab LC-2" : {
      google: "https://www.google.com/maps/place/Wallops+Island,+VA/@37.8438006,-75.4828664,5557m/data=!3m1!1e3!4m5!3m4!1s0x89b965f5dd145fcf:0x887dcc241626afa1!8m2!3d37.8431223!4d-75.4779357",
      wiki: "https://www.rocketlabusa.com/updates/rocket-lab-opens-launch-complex-2-confirms-u-s-air-force-payload-as-first-electron-mission-from-u-s-soil/",
      img: "https://imgur.com/Od7JSdq.png",
    },
    "Launch Pad" : {
      google: "https://www.google.com/maps/place/25%C2%B059'49.6%22N+97%C2%B009'18.1%22W/@25.9978261,-97.1563054,2713m/data=!3m1!1e3!4m5!3m4!1s0x0:0xd397350c75f04b78!8m2!3d25.997116!4d-97.155031",
      wiki: "https://en.wikipedia.org/wiki/SpaceX_Starbase",
      img: "https://imgur.com/Zxkkgqz.png",
    },
    "Pad 0A" : {
      google: "https://www.google.com/maps/place/37%C2%B050'01.3%22N+75%C2%B029'17.2%22W/@37.8342969,-75.4896529,2355m/data=!3m1!1e3!4m5!3m4!1s0x0:0x58e106427980c28a!8m2!3d37.8337!4d-75.4881",
      wiki: "https://en.wikipedia.org/wiki/Mid-Atlantic_Regional_Spaceport_Launch_Pad_0#:~:text=Launch%20Pad%200%20(LP%2D0,the%20launch%20complex%20until%202003.",
      img: "https://imgur.com/09P1t19.png",
    },
    "Mu Center" : {
      google: "https://www.google.com/maps/place/Uchinoura+Space+Center/@31.2522033,131.0725817,6315m/data=!3m1!1e3!4m5!3m4!1s0x0:0x2f00b2429bd29380!8m2!3d31.2512669!4d131.0761271?hl=en",
      wiki: "https://en.wikipedia.org/wiki/Uchinoura_Space_Center",
      img: "https://imgur.com/l42RVex.png",
    },
    "LC-81\/24" : {
      google: "https://www.google.com/maps/place/Uchinoura+Space+Center/@31.2522033,131.0725817,6315m/data=!3m1!1e3!4m5!3m4!1s0x0:0x2f00b2429bd29380!8m2!3d31.2512669!4d131.0761271?hl=en",
      wiki: "https://en.wikipedia.org/wiki/Baikonur_Cosmodrome_Site_81",
      img: "https://imgur.com/rtnrZH1.png",
    },
    "Cosmic Girl, 747-400" : {
      google: null,
      wiki: "https://en.wikipedia.org/wiki/Cosmic_Girl_(aircraft)",
      img: "https://imgur.com/Xv8hnQj.png",
    },
    "LP-101" : {
      google: "https://www.google.com/maps/@19.6144659,110.9517656,2043m/data=!3m1!1e3",
      wiki: "https://en.wikipedia.org/wiki/Wenchang_Space_Launch_Site",
      img: "https://imgur.com/IwYuN0q.png",
    },
    "LA-Y1" : {
      google: "https://www.google.com/maps/place/Space+Museum,+Tanegashima+Space+Centre/@30.3749364,130.9564285,788m/data=!3m1!1e3!4m5!3m4!1s0x353cf2acbf51a1d9:0xe41d40b31890ec74!8m2!3d30.374865!4d130.9576461",
      wiki: "https://en.wikipedia.org/wiki/Tanegashima_Space_Center",
      img: "https://imgur.com/pGwFrNf.png",
    },
    "LA-Y2" : {
      google: "https://www.google.com/maps/place/Space+Museum,+Tanegashima+Space+Centre/@30.3749364,130.9564285,788m/data=!3m1!1e3!4m5!3m4!1s0x353cf2acbf51a1d9:0xe41d40b31890ec74!8m2!3d30.374865!4d130.9576461",
      wiki: "https://en.wikipedia.org/wiki/Tanegashima_Space_Center",
      img: "https://imgur.com/pGwFrNf.png",
    },
  };

  for (let key in launchPads) {
    if (launches[index].pad.name === key) {
      googleSatellite = launchPads[key].google
      facilityWiki = launchPads[key].wiki
      padImage = launchPads[key].img
    }
  }

  return (
    <div id="launchpad_container">
      {googleSatellite ? 
        <p>Launch Pad: <a href={googleSatellite} target="_blank" rel="noreferrer">{launches[index].pad.name}</a></p>
        : <p>Launch Pad: TBD</p>}

      {facilityWiki ? 
      <p>Facility: <a href={facilityWiki} target="_blank" rel="noreferrer">{launches[index].pad.location.name}</a></p>
        : null}

      {(launches[index].pad.location.country && launches[index].pad.location.state) ? 
      <p>Location: {launches[index].pad.location.country} ({launches[index].pad.location.state})</p> 
        : null}

      {(launches[index].pad.location.country && !launches[index].pad.location.state) ? 
      <p>Location: {launches[index].pad.location.country}</p> 
        : null}
        
      {padImage ? <img id="launchpad_image" src={padImage} alt="launchpad_image"/> 
        : null}
    </div>
  )
}

export default LaunchPad


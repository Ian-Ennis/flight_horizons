import React from 'react'
import { useEffect, useState } from "react";
import Entry from "./Components/Entry";
import Home from "./Components/Home";

function App() {
  // placeholder data while fetch request completes during entry animations
  const initialLaunchData = {
    result: [
      {
        sort_date: "",
        name: "",
        provider: { name: "" },
        vehicle: { name: "" },
        pad: {
          name: "",
          location: {
            name: "",
            state: "",
            statename: "",
            country: "",
          },
        },
      },
    ],
  };

  const [upcomingLaunches, setUpcomingLaunches] = useState(initialLaunchData)
  const [animate, setAnimate] = useState(true);
  const [entry, setEntry] = useState(true);

  const fetchData = async () => {
    const response = await fetch("https://fdo.rocketlaunch.live/json/launches", {
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    })
    if (!response.ok) {
      throw new Error("Network response was bad")
      }
    return response.json()
    }

  useEffect(() => {
    fetchData()
    .then((data) => {
      setUpcomingLaunches(data)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
  }, [])

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setTimeout(() => {
        window.sessionStorage.setItem("firstLoadDone", 1);
        setAnimate(false);
      }, 7500);
    } else {
        setAnimate(false)
    }
  });

  return (
    <>
      {animate ? <Entry /> : <Home launches={upcomingLaunches.result} />}
    </>
  );
}

export default App;

// const rocketLaunchLive = {
//   valid_auth: true,
//   count: 25,
//   limit: 25,
//   total: 120,
//   last_page: 5,
//   result: [
//     {
//       id: 3190,
//       cospar_id: "",
//       sort_date: "1662587100",
//       name: "Eutelsat Konnect VHTS",
//       provider: { id: 4, name: "Arianespace", slug: "arianespace" },
//       vehicle: { id: 2, name: "Ariane 5", company_id: 5, slug: "ariane-5" },
//       pad: {
//         id: 17,
//         name: "ELA-3",
//         location: {
//           id: 70,
//           name: "Guiana Space Centre",
//           state: null,
//           statename: null,
//           country: "French Guiana",
//           slug: "guiana-space-centre",
//         },
//       },
//       missions: [
//         { id: 4916, name: "Eutelsat Konnect VHTS", description: null },
//       ],
//       mission_description: null,
//       launch_description:
//         "An Arianespace Ariane 5 rocket was set to launch the Eutelsat Konnect VHTS mission on Wednesday, September 7, 2022 at 9:45 PM (UTC).",
//       win_open: "2022-09-07T21:45Z",
//       t0: null,
//       win_close: null,
//       est_date: { month: null, day: null, year: null, quarter: null },
//       date_str: "Sep 07",
//       tags: [],
//       slug: "eutelsat-konnect-vht",
//       weather_summary: "Humid and Mostly Cloudy\nTemp: 82.32F\nWind: 8.44mph\n",
//       weather_temp: 82.32,
//       weather_condition: "Humid and Mostly Cloudy",
//       weather_wind_mph: 8.44,
//       weather_icon: "wi-day-cloudy",
//       weather_updated: "2022-09-07T12:00:17+00:00",
//       quicktext:
//         "Ariane 5 - Eutelsat Konnect VHTS - Wed Sep 07, 2022 21:45:00 UTC (L+00:37:58) - https://rocketlaunch.live/launch/eutelsat-konnect-vht for info/stream",
//       media: [
//         {
//           id: 1089,
//           media_url: "",
//           youtube_vidid: "FhHUbSuZN_8",
//           featured: true,
//           ldfeatured: true,
//           approved: true,
//         },
//       ],
//       result: -1,
//       suborbital: false,
//       modified: "2022-09-06T16:01:12+00:00",
//     },
//   ]}




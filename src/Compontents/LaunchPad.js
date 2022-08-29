function LaunchPad({ futureLaunches, index }) {
    console.log("LaunchPad index:", index)

    console.log(futureLaunches[index])

    const ex = [
        {
          id: 3185,
          cospar_id: "",
          sort_date: "1660937040",
          name: "Starlink-56 (4-27)",
          provider: { id: 1, name: "SpaceX", slug: "spacex" },
          vehicle: { id: 1, name: "Falcon 9", company_id: 1, slug: "falcon-9" },
          pad: {
            id: 3,
            name: "SLC-40",
            location: {
              id: 62,
              name: "Cape Canaveral SFS",
              state: "FL",
              statename: "Florida",
              country: "United States",
              slug: "cape-canaveral-sfs",
            },
          },
          missions: [{ id: 4910, name: "Starlink-56 (4-27)", description: null }],
          mission_description: null,
          launch_description:
            "A SpaceX Falcon 9 rocket will launch the Starlink-56 (4-27) mission on Friday, August 19, 2022 at 7:24 PM (UTC).",
          win_open: "2022-08-19T19:24Z",
          t0: null,
          win_close: null,
          est_date: { month: null, day: null, year: null, quarter: null },
          date_str: "Aug 19",
          tags: [
            { id: 105, text: "B1062" },
            { id: 92, text: "Series: SpaceX Starlink" },
          ],
          slug: "starlink-56-4-27",
          weather_summary:
            "Humid and Partly Cloudy\nTemp: 89.29F\nWind: 8.27mph\n",
          weather_temp: 89.29,
          weather_condition: "Humid and Partly Cloudy",
          weather_wind_mph: 8.27,
          weather_icon: "wi-day-cloudy",
          weather_updated: "2022-08-18T12:00:22+00:00",
          quicktext:
            "Falcon 9 - Starlink-56 (4-27) - Fri Aug 19, 2022 19:24:00 UTC (L-20:53:25) - https://rocketlaunch.live/launch/starlink-56-4-27 for info/stream",
          media: [],
          result: -1,
          suborbital: false,
          modified: "2022-08-15T14:17:26+00:00",
        },
    ]

    return (
        <div id="launchpad_container">
            <p>Launch Pad: {futureLaunches[index].pad.name}</p>
            <p>Facility: {futureLaunches[index].pad.location.name}</p>
            {futureLaunches[index].pad.location.state ? <p>State: {futureLaunches[index].pad.location.state}</p> : null}
            {futureLaunches[index].pad.location.country ? <p>Country: {futureLaunches[index].pad.location.country}</p> : null}
        </div>
        )
}

export default LaunchPad
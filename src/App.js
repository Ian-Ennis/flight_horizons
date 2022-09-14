import React from 'react'
import { useEffect, useState } from "react";
import Entry from "./Components/Entry";
import Home from "./Components/Home";
import fetchData from "./Components/FetchRequest"

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

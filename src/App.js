import React from 'react'
import { useEffect, useState } from "react";
import Entry from "./Components/Entry";
import Home from "./Components/Home";
import fetchData from "./Components/FetchRequest"

function App() {
  // Placeholder data while fetch request completes during entry animations
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
  
  // Launch data component state initially set to above placeholder data 
  const [upcomingLaunches, setUpcomingLaunches] = useState(initialLaunchData)
  // Animation component state to render initial <Entry /> component
  const [animate, setAnimate] = useState(true);

  // Fetch request for upcoming launch data
  useEffect(() => {
    // fetchData() specified in FetchRequest.js
    fetchData()
    .then((data) => {
      setUpcomingLaunches(data)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
  }, [])

  /* 
  -useEffect() renders initial entry screen animation once per session
  -CSS animations render in <Entry /> component, then setTimeout() renders <Home /> component 
    once timer expires
  -Launch data passed down to <Home /> component as props
  */
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

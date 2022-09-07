import { useEffect, useState } from "react";
import Entry from "./Components/Entry";
import Home from "./Components/Home";

function App() {
  const [upcomingLaunches, setUpcomingLaunches] = useState([]);
  const [animate, setAnimate] = useState(true);
  const [entry, setEntry] = useState(true);

  // what part of this codebase would be really bad if it broke?
  // - it would be bad if we didnt see an animation on first load
  // - '' '' '' '' '' '' animation plays on every reload
  // - '' '' '' '' '' '' we didn't transition to the home screen after initial animation

  const fetchData = async () => {
    console.log('in fetchData')
    const response = await fetch("https://fdo.rocketlaunch.live/json/launches?key=8d15b6e5-4f07-4c6b-b60a-b37c26603bed")
    if (!response.ok) {
      throw new Error("Network response was not OK")
      }
    return response.json()
    }

  useEffect(() => {
    console.log('in use effect')
    fetchData()
    .then((data) => {
      console.log("data:", data)
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
      }, 7000);
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




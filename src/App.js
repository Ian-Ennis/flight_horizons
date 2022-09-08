import { useEffect, useState } from "react";
import Entry from "./Components/Entry";
import Home from "./Components/Home";

function App() {
  // placeholder data while fetchData fetch request completes
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
    const response = await fetch("https://fdo.rocketlaunch.live/json/launches?key=8d15b6e5-4f07-4c6b-b60a-b37c26603bed")
    if (!response.ok) {
      throw new Error("Network response was not OK")
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




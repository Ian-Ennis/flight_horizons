import { useEffect, useState } from "react";
import Entry from "./Compontents/Entry";
import Home from "./Compontents/Home";

function App() {
  const [animate, setAnimate] = useState(true);
  const [entry, setEntry] = useState(true); /* component state for manual testing of entry screen */

  // what part of this codebase would be really bad if it broke?
  // - it would be bad if we didnt see an animation on first load
  // - '' '' '' '' '' '' animation plays on every reload
  // - '' '' '' '' '' '' we didn't transition to the home screen after initial animation

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
      {entry ? <Entry /> : <Home />}
    </>
  );
}

export default App;




import { useEffect, useState } from 'react'
import Entry from './Compontents/Entry';
import Home from "./Compontents/Home";


function App() {
  const [animate, setAnimate] = useState(true)
  const [entry, setEntry] = useState(true)

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setAnimate(true)
      window.sessionStorage.setItem("firstLoadDone", 1)
    } 
    // else {
    //   setAnimate(false)
    // }
  })

  setTimeout(() => {
    console.log('5 second timer is over')
    setEntry(false)
  }, 6000)

  return (
    <>
    {entry ? <Entry animate={animate}/> : <Home />}
    </>
  );
}

export default App;

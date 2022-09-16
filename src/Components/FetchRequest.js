import 'whatwg-fetch'

async function fetchData() {
  const res = await fetch("https://fdo.rocketlaunch.live/json/launches", {
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  });
  return await res.json();
}

export default fetchData
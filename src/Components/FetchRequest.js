async function fetchData() {
  const res = await fetch("https://fdo.rocketlaunch.live/json/launches", {
    headers: {
      Accepts: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  });
  const json = await res.json();
  return json;
}

export default fetchData
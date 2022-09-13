import React from "react";
import Enzyme from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { shallow } from "enzyme";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

it("renders the <App /> component", () => {
  const shallowAppComponent = shallow(<App />);
  expect(shallowAppComponent).toMatchInlineSnapshot(`
  <Fragment>
    <Entry />
  </Fragment>
  `);
});

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

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          valid_auth: true,
          count: 25,
          limit: 25,
          total: 120,
          last_page: 5,
          result: [
            {
              id: 3190,
              sort_date: "1662587100",
              name: "Eutelsat Konnect VHTS",
              provider: { id: 4, name: "Arianespace", slug: "arianespace" },
              vehicle: {
                id: 2,
                name: "Ariane 5",
                company_id: 5,
                slug: "ariane-5",
              },
              pad: {
                id: 17,
                name: "ELA-3",
                location: {
                  id: 70,
                  name: "Guiana Space Centre",
                  state: null,
                  statename: null,
                  country: "French Guiana",
                },
              },
              missions: [
                { id: 4916, name: "Eutelsat Konnect VHTS", description: null },
              ],
              launch_description:
                "An Arianespace Ariane 5 rocket was set to launch the Eutelsat Konnect VHTS mission on Wednesday, September 7, 2022 at 9:45 PM (UTC).",
            },
          ],
        }),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it("fetches data from API as expected", async () => {
  const json = await fetchData();
  expect(json.valid_auth).toBeTruthy();
  expect(json.count).toBe(25);
});

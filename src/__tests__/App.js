import React from "react";
import Enzyme from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { shallow } from "enzyme";
import App from "../App";
import fetchData from "../Components/FetchRequest"

Enzyme.configure({ adapter: new Adapter() });

it("renders the <App /> component", () => {
  const shallowAppComponent = shallow(<App />);
  expect(shallowAppComponent).toMatchInlineSnapshot(`
  <Fragment>
    <Entry />
  </Fragment>
  `);
});

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          valid_auth: true,
          count: 25,
          result: [
            {
              id: 3190,
              sort_date: "1662587100",
              name: "Eutelsat Konnect VHTS",
              provider: { name: "Arianespace" },
              vehicle: {
                name: "Ariane 5",
              },
              pad: {
                name: "ELA-3",
                location: {
                  id: 70,
                  name: "Guiana Space Centre",
                  state: null,
                  statename: null,
                },
              },
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

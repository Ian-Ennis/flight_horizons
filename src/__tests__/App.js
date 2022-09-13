import React from "react";
import { render } from "@testing-library/react";
import Enzyme from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { shallow } from "enzyme";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

// describe("fetchData", () => {
//   test("API call works", async () => {
//     const json = await fetchData();

//     expect(fetchMock).toHaveBeenCalledWith(
//       "https://fdo.rocketlaunch.live/json/launches?key=8d15b6e5-4f07-4c6b-b60a-b37c26603bed"
//     );

//     expect(json.result[0].valid_auth.toBeTruthy());
//     expect(json.result[0].count.toEqual(25));
//     expect(json.result).not.toBeUndefined();
//   });
// });

// ========================================================

async function withFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return json;
}

// This is the section where we mock `fetch`
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

// This is actual testing suite
describe("withFetch", () => {
  test("works", async () => {
    const json = await withFetch();
    expect(json.result).not.toBeUndefined();
  });
});

// =======================================================

it("renders the App component", () => {
  const shallowAppComponent = shallow(<App />);
  expect(shallowAppComponent).toMatchInlineSnapshot(`
<Fragment>
  <Entry />
</Fragment>
`);
});

// const mockAPICall = {
//       valid_auth: true,
//       count: 25,
//       limit: 25,
//       total: 120,
//       last_page: 5,
//       result: [
//         {
//           id: 3190,
//           sort_date: "1662587100",
//           name: "Eutelsat Konnect VHTS",
//           provider: { id: 4, name: "Arianespace", slug: "arianespace" },
//           vehicle: { id: 2, name: "Ariane 5", company_id: 5, slug: "ariane-5" },
//           pad: {
//             id: 17,
//             name: "ELA-3",
//             location: {
//               id: 70,
//               name: "Guiana Space Centre",
//               state: null,
//               statename: null,
//               country: "French Guiana",
//             },
//           },
//           missions: [
//             { id: 4916, name: "Eutelsat Konnect VHTS", description: null },
//           ],
//           launch_description:
//             "An Arianespace Ariane 5 rocket was set to launch the Eutelsat Konnect VHTS mission on Wednesday, September 7, 2022 at 9:45 PM (UTC).",
//         },
//     ]}

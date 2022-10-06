import fetchData from "../Components/FetchRequest";

// Mock fetch request for launch data to eliminate API calls during testing
const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          valid_auth: true,
          count: 25,
        }),
    })
  )
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

/* Test ensures server response is:
  -a fetch request supplying valid credentials
  -in the form of an object
  -has length
  -holds 25 launch parameters
*/
it("fetches data from API as expected", async () => {
  const json = await fetchData();
  expect(json.valid_auth).toBeTruthy();
  expect(json).toBeObject();
  expect(json).not.toBeEmpty();
  expect(json.count).toBe(25);
});

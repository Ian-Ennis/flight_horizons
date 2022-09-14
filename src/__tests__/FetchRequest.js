import fetchData from "../Components/FetchRequest";

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          valid_auth: true,
          count: 25,
        }),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it("fetches data from API as expected", async () => {
  const json = await fetchData();
  expect(json).toBeObject();
  expect(json).not.toBeEmpty();
  expect(json.valid_auth).toBeTruthy();
  expect(json.count).toBe(25);
});

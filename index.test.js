const axios = require("axios");

function fetchData(endpoint) {
  return axios
    .get("http://localhost:3000" + endpoint)
    .then((data) => data.data);
}

test("the data is hello world", () => {
  return fetchData("/").then((data) => {
    expect(data).toBe("Hello World");
  });
});

test("the data is root api", () => {
  return fetchData("/api").then((data) => {
    expect(data).toBe("Root API endpoint");
  });
});

//=================================================
// Test for the Jokes and Quotes endpoints
//=================================================

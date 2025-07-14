// api => application programming interfaces
// api is a sets of rules and protocals use to communicate with client and server
// it is an intermediator between clinent and server

URL = "https://jsonplaceholder.typicode.com/users";

async function fetchData() {
  let response = await fetch(URL);
  console.log(response.json());
}

fetchData();

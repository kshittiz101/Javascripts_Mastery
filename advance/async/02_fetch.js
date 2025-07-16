// Define the API endpoint URL that returns a list of users in JSON format
let URL = "https://jsonplaceholder.typicode.com/users";

// Define an asynchronous function to fetch user data
async function fetchUsers() {
  // Send an HTTP GET request to the URL and wait for the response
  let response = await fetch(URL);

  // Wait for the response to be converted to JSON and print it in the console
  console.log(await response.json());
}

// Call the function to fetch and log the users
fetchUsers();

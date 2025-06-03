// fetch() -- api is a modern interface which is used make http requests from the browers.
// it allow you to retrieve or send data to a server asynchronously with out refreshing the browers or page

let url = 'https://reqres.in/api/users?page=2'

function getUsers() {
  fetch(url, {
    headers: {
      'x-api-key': 'reqres-free-v1', // Include your free API key here
    },
  })
    .then((response) => {
      return response.json() // Parse the response as JSON
    })
    .then((data) => {
      console.log(data) // Handle and display the response data
    })
    .catch((error) => {
      console.error('Error fetching users:', error) // Catch and log any errors
    })
}

getUsers()

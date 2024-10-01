function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Hello!");
  await delay(2000); // Wait for 2 seconds then print how are you ?
  console.log("How are you?");
}

// fetching api data
async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/3"
    );
    const user = await response.json(); // Wait for the response to be converted to JSON
    console.log(user);
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}

// greet();
fetchUserData();

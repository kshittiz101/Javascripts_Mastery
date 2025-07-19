// selecting input field and button

let input = document.querySelector(".custom-input");
console.log(input);

let addBtn = document.querySelector("#add-btn");
console.log(addBtn);

// api url
let apiUrl = "https://687b030babb83744b7ee8555.mockapi.io/api/v1/todos";

// Event listener for Add Button
addBtn.addEventListener("click", () => {
  let newTask = input.value;
  console.log(newTask);
  console.log("clicked");

  // Optionally: Clear input field after getting value
  // input.value = "";
});

// Async function to fetch data from API
async function fetchData() {
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);

    data.forEach((obj) => {
      console.log(obj);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

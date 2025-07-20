// selecting add btn and input field
let input = document.querySelector(".custom-input");
let addBtn = document.querySelector("#add-btn");
const APIURL = "https://687b030babb83744b7ee8555.mockapi.io/api/v1/todos";
console.log(addBtn);
console.log(input);

addBtn.addEventListener("click", function () {
  let newTodo = input.value;
  console.log(newTodo);
  console.log("Task is added");
  input.value = "";
});

async function fetchData() {
  let response = await fetch(APIURL);
  let data = response.json();
  console.log(data);
}

fetchData();

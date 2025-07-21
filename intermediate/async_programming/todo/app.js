// Select elements
let input = document.querySelector(".custom-input");
let addBtn = document.querySelector("#add-btn");
const todoContainer = document.querySelector("#todo-container");

const APIURL = "https://687b030babb83744b7ee8555.mockapi.io/api/v1/todos";

// Add Button Event
addBtn.addEventListener("click", function () {
  let newTodo = input.value.trim();
  if (!newTodo) return;

  console.log("Task is added:", newTodo);
  input.value = "";
  // Optionally: Add logic to POST newTodo to API here
});

// Fetch and render data
async function fetchData() {
  try {
    let response = await fetch(APIURL);
    let data = await response.json();

    console.log("Fetched Todos:", data);

    data.forEach((obj) => {
      const div = document.createElement("div");
      div.className = "todo";

      div.innerHTML = `
        <p class="todo-task-text">${obj.task}</p>
        <div class="todo-btn-container">
          <button class="custom-btn" type="button" aria-label="Delete task">
            Delete <i class="ri-delete-bin-line"></i>
          </button>
          <button class="custom-btn" type="button" aria-label="Edit task">
            Edit <i class="ri-pencil-line"></i>
          </button>
        </div>
      `;

      todoContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

fetchData();

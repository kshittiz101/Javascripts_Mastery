// Get references to DOM elements
let inputText = document.getElementById("input-box");
let todoBtn = document.getElementById("todo-button");
let todoList = document.getElementById("todo-list");

// Initialize the to-do list array with predefined tasks
let todoListArray = ["Reading Books", "Writing", "Setups"];

// Function to create and append a single to-do item to the list
function addTodoItem(task) {
  let todoItem = document.createElement("li");
  todoItem.textContent = task;
  todoItem.className = "todo-item";

  // Create a delete button for the task
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // Append the delete button to the to-do item
  todoItem.appendChild(deleteBtn);

  // Append the to-do item to the list
  todoList.appendChild(todoItem);
}

// Function to render the initial list of tasks
function renderInitialList() {
  for (let i = 0; i < todoListArray.length; i++) {
    addTodoItem(todoListArray[i]);
  }
}

// Call the function to render the initial list when the page loads
renderInitialList();

// Event listener for adding a new task
todoBtn.addEventListener("click", function () {
  let newTask = inputText.value.trim(); // Remove whitespace from both ends

  if (newTask === "") {
    alert("Please enter a valid task");
  } else if (todoListArray.indexOf(newTask) !== -1) {
    alert("This task already exists!");
  } else {
    // Add the new task to the array
    todoListArray.push(newTask);

    // Add the new task to the DOM
    addTodoItem(newTask);

    // Clear the input field
    inputText.value = "";
  }
});

// Event listener for deleting a task using event delegation
todoList.addEventListener("click", function (e) {
  if (e.target && e.target.matches("button.delete-btn")) {
    let taskItem = e.target.parentElement;
    let taskText = taskItem.firstChild.textContent;

    // Remove the task from the array
    let index = todoListArray.indexOf(taskText);
    if (index !== -1) {
      todoListArray.splice(index, 1);
    }

    // Remove the task from the DOM
    todoList.removeChild(taskItem);
  }
});

let inputText = document.getElementById("input-box");
let todoBtn = document.getElementById("todo-button");
let todoList = document.getElementById("todo-list");

let todoListArray = ["Reading Books", "Writing", "Setups"];

for (let i = 0; i < todoListArray.length; i++) {
  let todoItem = document.createElement("li");
  todoItem.textContent = todoListArray[i];
  todoItem.classList.add("todo-items");
  todoList.appendChild(todoItem);
}

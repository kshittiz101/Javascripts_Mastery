let taskInput = document.getElementById("task-input");
let btn = document.getElementById("btn");
let taskList = document.getElementById("tasks-list");

let tasks = ["reading book", "drinking water"];

btn.addEventListener("click", function () {
  let newTask = taskInput.value;
  if (newTask === "") return;
  tasks.push(newTask);
  console.log(tasks);
  display();
});

function display() {
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i];
    taskList.appendChild(li);
  }
}

// for inital value
display();

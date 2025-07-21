let addBtn = document.getElementById("add-btn");
let input = document.querySelector(".custom-input");
let todoContainer = document.querySelector("#todo-container");

// api url
let apiUrl = "https://687b030babb83744b7ee8555.mockapi.io/api/v1/todos";

// post task
addBtn.addEventListener("click", postData);

// fetching all datas
async function fetchData() {
  let response = await fetch(apiUrl);
  let data = await response.json();
  console.log(data);

  data.forEach((obj) => {
    let div = document.createElement("div");
    div.className = "todo";
    div.innerHTML = `
    <p>${obj.task}</p>
  <div class="todo-btn-container">
            <button class="custom-btn" type="button" aria-label="Delete task">
              Delete <i class="ri-delete-bin-line"></i>
            </button>
            <button class="custom-btn" type="button" aria-label="Edit task">
              Edit <i class="ri-pencil-line"></i>
            </button>
          </div>`;
    console.log(div);
    todoContainer.append(div);
  });
}

// post new Task in api
async function postData() {
  let newTodo = input.value.trim();
  // this prevent from empty submissions
  if (!newTodo) return;

  console.log(newTodo);

  let objData = {
    task: newTodo,
  };
  console.log(objData);

  // post in api url
  let response = await fetch(apiUrl, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  if (response.ok) {
    // reset value after submission
    input.value = "";
    fetchData();
  } else {
    console.error("Failed to get data", response.StatusText);
  }
}

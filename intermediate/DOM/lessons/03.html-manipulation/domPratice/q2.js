// 2. Insert a button with text “click me” as the first element inside the paragraph created in 1 st question.
let contentDiv = document.getElementById("content");
let para = document.createElement("p");
para.innerText = "How are you ??";
para.setAttribute("style", "background-color:black; color:green; padding:20px");

let button = document.createElement("button");
button.innerText = "click me";

contentDiv.append(para);
para.prepend(button);

console.dir(para);

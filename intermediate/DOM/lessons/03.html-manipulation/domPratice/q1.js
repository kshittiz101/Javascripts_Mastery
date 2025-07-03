//1. Create a paragraph with text “How are you ??” and add background color to black and
// font color to green using javascript.
let contentDiv = document.getElementById("content");
let para = document.createElement("p");
para.innerText = "How are you ??";
// para.style.backgroundColor = "black";
// para.style.color = "green";

para.setAttribute("style", "background-color:black; color:green; padding:20px");
contentDiv.append(para);

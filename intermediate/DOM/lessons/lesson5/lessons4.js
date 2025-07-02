let content = document.getElementById("content");
let para1 = document.querySelector("#para1");

console.dir(content);
console.log(para1);

para1.style.backgroundColor = "red";

// parent node
console.log("para1 parent node", para1.parentNode);
let parentNode = para1.parentNode;

// creation of element
let para3 = document.createElement("p");
para3 = "this is paragaraph Three";
parentNode.append(para3);

// common parent methods
let h2 = document.createElement("h2");
h2.innerText = "This is heading Two";
// parentNode.replaceChild(h2, para1); // old method use append instead
parentNode.append(h2, para1);

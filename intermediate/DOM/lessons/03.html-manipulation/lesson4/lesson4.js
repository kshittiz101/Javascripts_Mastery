// Select the content div
let content = document.getElementById("content");

// Select the first <h2> inside it
let h2 = document.getElementsByTagName("h2")[0];

console.log(content);

// Get tag and node names
console.log("Tag Name:", content.tagName); // returns 'DIV'
console.log("Node Name:", content.nodeName); // also returns 'DIV'

// Text values
console.log("innerHTML:", content.innerHTML); // full HTML inside #content
console.log("innerText:", content.innerText); // visible text (CSS-aware)
console.log("textContent of h2:", h2.textContent); // full text content of <h2>

// Replace HTML content
content.innerHTML = "<h1>This is Heading One</h1>";
console.log("First child after change:", content.firstChild); // h1

// Insert new elements

// Append <h6> at the end of #content
const h6 = document.createElement("h6");
h6.textContent = "This is heading of h6";
content.append(h6);

// Prepend <p> to the beginning of #content
const p = document.createElement("p");
p.innerText = "This is a paragraph at the beginning";
content.prepend(p);

// Insert <p> before the #content div (outside it)
const p1 = document.createElement("p");
p1.innerText = "This is before content div";
content.before(p1);

const p2 = document.createElement("p");
p2.innerText = "This is after the content div";
content.after(p2);

// deleting an element
p2.remove();

content.children[0].remove();
console.log(content);

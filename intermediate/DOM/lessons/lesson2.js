// Dom
// programming interfaces, represents the html documents in tree format,
// by the help of Dom you can add, remove html tags, attributes, add / remove style and events as well
// dynamically using js

// phases of Dom
// 1. Dom
// 2. Selecting html
// 3. How to change html tags, attributes
// 4. How to change css
// 5. How to add Events Listeners in js

// selecting h2
let h2 = document.querySelector("h2");
console.log(h2);

// chaning html
h2.innerHTML = "This heading is change from js using Dom";

// changing css
h2.style.backgroundColor = "green";

// add event listeners
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
  h2.style.color = "white";
});

// css manipulation in Dom
// we can manipulate don either by inline-css or class name

let content = document.getElementById("content");

// 1. with the help of setAttribute
content.setAttribute("class", "box");
content.setAttribute(
  "style",
  "background-color:red; color:white; padding:1rem"
);

// 2. using style
let aboutMe = document.getElementById("about-me");

aboutMe.style.backgroundColor = "blue";
aboutMe.style.color = "white";
aboutMe.style.fontSize = "3rem";
aboutMe.style.padding = "2rem";

// 3. Using style property csstext
let cta = document.getElementById("cta");
cta.style.cssText =
  "font-size:2rem; background-color: green; color: white; padding:2rem";

// 4. Using ClassName property
let mySkill = document.getElementById("mySkills");
mySkill.className = "mySkills";

//5. using classList property: add(), remove(), toggle(), contains()
let footer = document.querySelector("#footer");
footer.classList.add("bgRed");
footer.classList.add("colorBlue");
console.log(footer.className);

footer.classList.remove("colorBlue");
console.log(footer.className);
footer.classList.toggle("colorBlue");
console.log(footer.className);
footer.classList.toggle("colorBlue");
console.log(footer.className);

// it will show the class is present or not (either return true or false)
let isPresentOrNot = footer.classList.contains("colorBlue");

console.log(isPresentOrNot);

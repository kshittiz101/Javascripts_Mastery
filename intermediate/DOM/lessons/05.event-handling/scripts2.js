let box = document.querySelector(".box");
let eventExploreBtn = document.querySelector("#eventExploreBtn");

eventExploreBtn.addEventListener("mousedown", function () {
  console.log("Mouse Down");
});

eventExploreBtn.addEventListener("mouseup", function () {
  console.log("Mouse up");
});

box.addEventListener("mouseenter", function () {
  console.log("mouseenter");
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseleave", function () {
  console.log("mouse leave");
  box.style.backgroundColor = "red";
});

box.addEventListener("mouseover", function () {
  console.log("mouse over");
  box.style.backgroundColor = "green";
});

box.addEventListener("mouseout", function () {
  console.log("mouse out");
  box.style.backgroundColor = "red";
});

box.addEventListener("mousemove", function () {
  console.log("mouse move");
  box.style.backgroundColor = "red";
});

box.addEventListener("keyup", function () {
  console.log("Key pressed");
});

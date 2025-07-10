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

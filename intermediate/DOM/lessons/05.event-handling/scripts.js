// 2. Property Method
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");

btnTwo.onclick = function () {
  alert("This alert is showing using Property Method");
};

// 3. using addEventListener()
// we can add multiple event in single btn
// we can remove event listener using removeEventListener('event', function)

function random() {
  console.log("Using event listener");
}
function doubleClick() {
  console.log("Using event listener: by double click");
}
btnThree.addEventListener("click", random);
btnThree.addEventListener("dblclick", doubleClick);

btnThree.removeEventListener("dblclick", doubleClick);

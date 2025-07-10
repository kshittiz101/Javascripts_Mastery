// 2. Property Method
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
const eventObj = document.querySelector("#eventObj");

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

// btnThree.removeEventListener("dblclick", doubleClick);

// event object
// The event object automatically passed to the event handler function when an event occurs
// it contains important information about the event, such as what is trigged the event types and other details like mouse coordinates , key pressed and more

// eventObj.addEventListener("click", function (event) {
//   // console.log(event);
//   console.log(event.type); // Type of event (e.g., "click", "keydown")
//   console.log(event.target); // The actual element that triggered the event
// });

// when passing reference
function eventObjFun(event) {
  // console.log(event);
  // console.log(event.type); // Type of event (e.g., "click", "keydown")
  console.log(event.target); // The actual element that triggered the event
}

eventObj.addEventListener("click", eventObjFun);

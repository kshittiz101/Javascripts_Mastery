// JavaScript is a single-threaded, event-driven, and interpreted programming language.
// By default, JavaScript follows a synchronous execution model.
// In synchronous programming, code executes line by line, and each task must finish before the next starts.
// Synchronous code blocks further execution until the current operation completes.

// asynchronous programming is used to handle tasks that take time to complete
// it allows the program to continue running while waiting for the task to complete

console.log("Start");
function syncTask() {
  // Simulate a blocking task
  let start = Date.now();

  while (Date.now() - start < 5000) {} // Blocks for 5 seconds
  console.log("Sync task done");
}
syncTask();
console.log("End");

// console.log('start');

// function display() {
//   console.log('Inside setTimeout');
// }

// setTimeout(display, 0);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log('end');

// some time if we want to destrory or don't want to call setTimeout Function
// setTimeout return id instead

console.log("script start");

function display() {
  console.log("Inside setTimeout");
}
// fetching the id of the settimeout function
const id = setTimeout(display, 0);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("clearing  settimeout ");
clearTimeout(id);
console.log("end");

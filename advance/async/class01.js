// js is single threaded, synchronous and interpreter language
//Synchronous Code runs line by line. Each operation must complete before the next one starts.

// asynchronous programming is used to handle tasks that take time to complete
// it allows the program to continue running while waiting for the task to complete

console.log('start');

function display() {
  console.log('Inside setTimeout');
}

setTimeout(display, 0);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('end');

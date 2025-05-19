// setInterval() -- function
// setInterval() repeatedly calls a function at a fixed time interval (in milliseconds).
// syntax: setInterval(callback, delay);

let intervalId = setInterval(() => {
  console.log('Tick');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log('Stopped');
}, 5000);

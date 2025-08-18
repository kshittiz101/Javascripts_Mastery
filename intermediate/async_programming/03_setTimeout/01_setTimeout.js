// setTimeout
// setTimeout in js in inbuilt function, it is async in nature, it executes code after specified time delayed
// it is asynchoronous in nature
// delayed time is measuered in miliseconds
// Returns a timeout ID which can be used to cancel the timeout.

// 2. Syntax
// setTimeout(callback, delay, ...args);

// Parameters:
// - `callback`: A function to execute after the delay.
// - `delay`: Time in milliseconds to wait before executing the callback.
// - `...args` (optional): Arguments to pass to the callback function.

// example:1
function demo() {
  console.log(
    "setimeout is js inbuilt method, which is async in nature, it executes code after specified time delayed"
  );
}
// setTimeout(callbacksFunctions, timeInmilliseconds(delay))
setTimeout(demo, 2000);

// example:2
// using arrow function
setTimeout(() => {
  console.log("this is flat arrow function example in setTimeout");
}, 3000);

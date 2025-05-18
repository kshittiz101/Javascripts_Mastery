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

// Example 1: Named Function as Callback
function hello() {
  console.log('Hello from 2 sec');
}
setTimeout(hello, 2000);
// Syntax: setTimeout(callbackFunction, delayInMilliseconds)

// Example 2: Arrow Function as Callback
setTimeout(() => {
  console.log('Using arrow function: setTimeout after 3 sec');
}, 3000);

// Example 3: Anonymous Function as Callback
setTimeout(function () {
  console.log('Using anonymous function: setTimeout after 4 sec');
}, 4000);

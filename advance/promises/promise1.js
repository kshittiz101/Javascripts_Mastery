// 1. Introduction to Promises
// A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promises help avoid callback hell and make async code more readable.

// A Promise can be in one of three states:
// Pending – Initial state, neither fulfilled nor rejected.
// Fulfilled – The operation completed successfully.
// Rejected – The operation failed.

// 2. Creating a Promise
// A Promise is created using the Promise constructor, which takes an executor function with resolve and reject parameters.

let promiseOne = new Promise((resolve, reject) => {})

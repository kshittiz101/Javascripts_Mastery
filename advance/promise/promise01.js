// promises is js
// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It’s a way to handle asynchronous tasks, like API calls or timeouts, in a more manageable way compared to callbacks.
// syntax for promise in js

// let promise = new Promise(function(resolve, reject) {
//   // Asynchronous operation
//   if (/* operation successful */) {
//     resolve("Success value");  // fulfilled
//   } else {
//     reject("Error message");   // rejected
//   }
// });

//  example -1
let arr = ['grapes', 'orange', 'banana'];
let promise = new Promise(function (resolve, reject) {
  if (arr.includes('apple')) {
    resolve('An arr includes apples');
  } else {
    reject('An array does not include apples in it');
  }
});

console.log(promise);

//  example -1 (using arrow function)
let arr2 = ['apples', 'orange', 'banana'];
let promise2 = new Promise((resolve, reject) => {
  if (arr2.includes('apples')) {
    resolve('An arr includes apples');
  } else {
    reject('An array does not include apples in it');
  }
});

console.log(promise2);

// example - 02  promises in function
function getData(arr) {
  return new Promise((resolve, reject) => {
    if (arr.includes('pen')) {
      resolve('You Have pen to write ');
    } else {
      reject("You don't have a pen to right");
    }
  });
}
let arr3 = ['pencile', 'Copy', 'book'];

console.log(getData(arr3));

// 1. Introduction to Promises
// A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promises help avoid callback hell and make async code more readable.

// A Promise can be in one of three states:
// Pending – Initial state, neither fulfilled nor rejected.
// Fulfilled – The operation completed successfully.
// Rejected – The operation failed.

// 2. Creating a Promise
// A Promise is created using the Promise constructor, which takes an executor function with resolve and reject parameters.

// syntax
// const promiseOne = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   if (success) {
//     resolve(value) // Promise is fulfilled
//   } else {
//     reject(error) // Promise is rejected
//   }
// })

// example -1
// producing promises
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: 'kshittiz' }
    const error = true

    if (!error) {
      resolve(data) // success
    } else {
      reject('Error feteching data') //faliure
    }
  }, 2000)
})

// consuming promises
// Promises are consumed using .then(), .catch(), .finally()

//1 .then() is use to handle the fullfillment promises

// 2. catch is used to handle rejection
// 3. finally() - Runs regardless of outcome

promiseOne
  .then((data) => {
    console.log('Success:', data)
  })
  .catch((error) => {
    console.log('Error:', error)
  })
  .finally(() => console.log('Promise settled!'))

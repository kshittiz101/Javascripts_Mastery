// syntax of promise
let promise = new Promise(function (resolve, reject) {
  let success = false
  if (success) {
    resolve('Data is fetched Successfully')
  } else {
    reject('Unable to fetched data')
  }
})

console.log(promise)

// without using arrow function
promise
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })

// with arrow function
// promise
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))

// Promise chaining in JavaScript is a technique where you link multiple .then() calls together to perform a sequence of asynchronous operations, one after another.

// syntaxt:
// doSomething()
//   .then(result => doSomethingElse(result))
//   .then(nextResult => doAnotherThing(nextResult))
//   .catch(error => console.error(error));
// When to use:
// When you need to run asynchronous tasks in order, where each depends on the result of the previous one.
// To avoid callback hell and write cleaner, more readable code.

let promise2 = new Promise((resolve, reject) => {
  let success = true

  if (success) {
    setTimeout(() => {
      resolve(5)
    }, 2000)
  } else {
    reject('Data is not fetched')
  }
})

// use when next task depends on the previous task

promise2
  .then((response) => {
    console.log(response) // 5
    return response + 10
  })
  .then((response) => {
    console.log(response) // 15
    return response * 10
  })

  .then((respone) => {
    console.log(respone) // 150
    return respone * 10
  })
  .catch((error) => {
    console.error(error)
  })

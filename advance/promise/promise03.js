// promises chaining in js
// Promise chaining in JavaScript allows you to run a sequence of asynchronous operations one after another, where each operation starts when the previous one completes.

// Basic syntax for promise chaining
// firstPromise()
//   .then(result1 => {
//     // Do something with result1
//     return secondPromise(result1);  // Returns another promise
//   })
//   .then(result2 => {
//     // Do something with result2
//     return thirdPromise(result2);
//   })
//   .then(result3 => {
//     // Final result
//     console.log("Final Result:", result3);
//   })
//   .catch(error => {
//     // Handle any error in the chain
//     console.error("Error:", error);
//   });

function asyncFun(num) {
  return new Promise((resolve, reject) => {
    if (num > 5) {
      resolve(5);
    } else {
      reject("error from Promise");
    }
  });
}

let promise1 = asyncFun(6);

promise1
  .then((res) => {
    console.log(res);
    return res + 1;
  })
  .then((res) => {
    console.log(res);
    return res - 10;
  })
  .then((res) => {
    console.log("this is a final value: ", res);
  })
  .catch((error) => {
    console.log("Got an error", error);
  });

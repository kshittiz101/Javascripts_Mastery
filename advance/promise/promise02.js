// method of promise in js
// .then() method in promise
/*


1. `.then(onFulfilled, onRejected)`
The `.then` method is the primary way to handle the result of a Promise once it settles. It takes two optional callback functions:
- onFulfilled`: Called when the Promise is fulfilled, receiving the resolved value.
- onRejected`: Called when the Promise is rejected, receiving the rejection reason (error).

 Key Details

- Return Value: `.then` always returns a new Promise, allowing chaining.
- If `onFulfilled` or `onRejected` returns a value, the new Promise resolves with that value.
- If they throw an error, the new Promise rejects with that error.
- If they return a Promise, the new Promise adopts its state (resolves or rejects based on the returned Promise).
- The `onRejected` parameter is optional but less commonly used since `.catch` is more explicit for error handling.
- `.then` is executed only when the Promise settles (fulfilled or rejected).


*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = false;
    if (data) {
      resolve("data is fetched Successfully!");
    } else {
      reject("data is not fetched got some error!");
    }
  }, 5000);
});

myPromise.then(
  (value) => console.log("Fulfilled:", value), // "Fulfilled: data is fetched Successfully!"
  (error) => console.log("Rejected:", error) // "Rejected: data is not fetched got some error!"
);

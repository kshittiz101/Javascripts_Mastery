// 1. Basic Promise Creation
// Question:
// Create a function called `delayedMessage` that returns a Promise.
// This Promise should resolve with the message "Hello after delay" after 2 seconds.

// Exercise Steps:
// - Use the `setTimeout` function to introduce the delay.
// - Ensure that the function returns a Promise that resolves after the delay.

function delayedMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello after delay");
    }, 2000);
  });
}
delayedMessage().then((msg) => {
  console.log(msg);
});

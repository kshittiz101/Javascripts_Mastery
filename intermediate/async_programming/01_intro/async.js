// Asynchronous Programming in JavaScript

// Definition:
//       Tasks can start and run in the background, allowing the program to continue executing other code without waiting. JavaScript uses an event loop to handle asynchronous operations.

// - Characteristics:
//     - Non-blocking: Tasks like network requests or timers run concurrently.
//     - Managed via callbacks, Promises, or `async/await`.
//     - Ideal for I/O-bound tasks but adds complexity due to handling completion states.

// - When to Use:
//     - Tasks involve waiting (e.g., fetching data from an API, reading files, timers).
//     - Building scalable apps like web servers or real-time apps (e.g., chat, streaming).
//     - Handling multiple operations concurrently (e.g., multiple API calls).

// Example
function asyncDemo() {
  // Synchronously print the first task
  console.log("task - 01");

  // Synchronously print the second task
  console.log("task - 02");

  // Asynchronously schedule a task to run after 2 seconds (2000ms)
  setTimeout(() => {
    // This loop will execute after the delay, printing numbers from 1 to 19999
    for (let i = 1; i < 20000; i++) {
      console.log(`task counter: ${i}`);
    }
  }, 2000);

  // This line runs immediately after task - 02, without waiting for setTimeout
  console.log("task - 03");
}

// Call the function to see the behavior
asyncDemo();

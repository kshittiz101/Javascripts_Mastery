// setTimeout() function schedule the task to complete after the specified time
// it return id, with the help of that id we can clear id

// clearTimeout() - function is used to cancel the scheduled tasks by setTimeout() function
// syntax
// clearTimeout(timeoutId);

function greeting(greet, name, age) {
  console.log(`${greet}, i am ${name} and i am ${age} year old`);
}

const timeId = setTimeout(greeting, 5000, 'hi', 'kshittiz', 28);
console.log(timeId);

setTimeout(
  () => {
    console.log(`clear setTimeout having id ${timeId}, using clearTimeout function`);
  },
  3000,
  timeId
);

clearTimeout(timeId);

// Use Cases for setTimeout() and clearTimeout()
// Delayed execution of a function

// Implementing undo or cancelable actions

// Debouncing user input (e.g., search or form typing)

// Delaying UI updates (e.g., loaders or animations)

// Retry logic or polling after failure

// Preventing actions after navigation or component unmount

// Conditional execution based on user decisions

// Creating simple countdown timers

// Throttling event handlers in basic scenarios

// Simulating network latency or async behavior for testing

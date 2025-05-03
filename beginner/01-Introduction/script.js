// in js console is an object to logging and debugging.
// it is mainly to show and display message, error in terminal and console

// - `console.log()`: General output (e.g., `console.log("Hello")` → Hello).
// - `console.error()`: Error messages (e.g., `console.error("Error!")`).
// - `console.warn()`: Warnings (e.g., `console.warn("Warning!")`).
// - `console.table()`: Displays arrays/objects as tables.
// - `console.clear()`: Clears console.
// - `console.time()`/`timeEnd()`: Measures execution time.
// - `console.group()`/`groupEnd()`: Groups related logs.
// - `console.assert()`: Logs if condition is false.
// - `console.trace()`: Shows call stack.

console.log("Hello World");
console.error("This is an error message");
console.warn("Warning !!!");
console.table(["apple", "orange", "banana"]);
console.table({ name: "kshittiz", age: 22 });
console.info("This will show info");

// Measure execution time
console.time("loopTimer");
for (let i = 0; i < 1000; i++) {
  // Simulate some work
}
console.timeEnd("loopTimer");

// Group related logs
console.group("User Info");
console.log("Name: kshittiz");
console.log("Age: 22");
console.groupEnd();

// Assert a condition
console.assert(1 === 2, "One is not equal to two!");

// Show call stack
function exampleTrace() {
  console.trace("Tracing the call stack");
}
exampleTrace();

// Clear console (commented to preserve output for demo)
// console.clear();

console.log("Hello World");
console.warn("Hello from kc");

console.error("This is error message");
console.info("This is an informational message.");

// Displays data as a table, which is very useful when working with arrays or objects.

// arrays of an object
const fruits = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Grapes", color: "Purple" },
];
console.table(fruits);

// arrays
const people = ["harry", "jhon", "Ram"];
console.table(people);

// Tests if a condition is true, and if not, it logs an error.
// it show error that 5 is not greater than 10
console.assert(5 > 10, "5 is not greater than 10");

// The alert() method is used in JavaScript to display an alert box with a specified message and an "OK" button. It’s a simple way to show information to the user in the form of a popup dialog box.

// alert("Js is running");

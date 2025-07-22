function introduce(greeting, name, age) {
  console.log(`${greeting}, my name is ${name} and I am ${age} years old.`);
}

// Passing multiple arguments after the delay
setTimeout(introduce, 2000, "Hello", "Kshittiz", 25);

// Arrow function with multiple arguments
setTimeout(
  (greeting, name, age) => {
    console.log(`${greeting} from async arrow! I'm ${name}, ${age} years old.`);
  },
  3000,
  "Hi",
  "KC",
  26
);

// Anonymous function with multiple arguments
setTimeout(
  function (greeting, name, age) {
    console.log(`${greeting} from anonymous! Name: ${name}, Age: ${age}`);
  },
  4000,
  "Hey",
  "Kshittiz",
  27
);

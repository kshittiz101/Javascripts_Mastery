// What is `this`?
// In JavaScript, `this` refers to the object that is currently executing the function.
// It is a dynamic reference that changes based on how a function is called, not where it's defined.

// 1.inside the object this
// when we use this keybord inside the object it will refer the same object that calling the function

function about() {
  console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`);
}

const person = {
  name: "kshittiz",
  age: 22,
  bio: about,
};

const person2 = {
  name: "Ram",
  age: 45,
  bio: about,
};

// this refer to who calling it
person.bio();
person2.bio();

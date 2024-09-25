// 1.Objects
//  - Description:
// The most fundamental non-primitive type.
// Objects are collections of key-value pairs where the keys are
// strings (or Symbols) and the values can be of any type, including other objects.

// object literal syntax
let person = {
  name: "kshittiz",
  age: 22,
  position: "Great Programmer",
  greet: function () {
    console.log("hello from kshittiz");
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.position);
person.greet();

// creating object using object Constructor
let person2 = new Object();
person2.name = "ram";
person2.age = 25;
console.log(person2.name);
console.log(person2.age);

// Using a Constructor Function:
// This allows for creating multiple objects with similar properties.

function Car(name, brand) {
  this.name = name; // Assign the parameter to the instance
  this.brand = brand;
}

// Use the `new` keyword to create new instances of the Car object
const car1 = new Car("Hondo12", "Honda");
const car2 = new Car("Maruti", "Maruti");

console.log(car1.name); // Output: Hondo12
console.log(car2.name); // Output: Maruti

// create using Object.create()

const prototype = {
  greet() {
    console.log("Hello");
  },
};
const person3 = Object.create(prototype);
person3.name = "Alice";
person3.age = "25";
person3.location = "New York";

// for (key in person3) {
//   console.log("---------------");
//   console.log(person3[key]);
// }

for (let key in person3) {
  console.log("---------------");
  console.log(person3[key]);
}

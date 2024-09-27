// class are the templates for creating objects with similar properties and methods
// those objects will have their own state(variables) and some behavior(function) inside it

// creating class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  run() {
    console.log("Can run");
  }
}

//  creating object of types Person
let person1 = new Person("kc", 22);
console.log(person1.name);
console.log(person1.age);
person1.run();

let person2 = new Person("sita", 25);
console.log(person2.name);
console.log(person2.age);
person2.run();

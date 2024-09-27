// The `super` keyword in JavaScript is used in class-based inheritance to access properties
// and methods from a parent class. It can be used in two contexts:

// -------------------------------------------------------------------------------------------------
// 1. Calling the Parent Class Constructor:
// In the constructor of a subclass, you can use `super()`
// to call the parent class's constructor and pass in arguments.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   animalName() {
//     console.log(`The name of animal: ${this.name}`);
//   }
// }
// class Dog extends Animal {
//   constructor(name, sound) {
//     super(name);
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(`${this.name} makes ${this.sound} sound`);
//   }
// }

// let dog1 = new Dog("kale", "Barking ");
// dog1.makeSound();
// dog1.animalName();

// ----------------------------------------------------------------------------------------------
// 2. Calling Parent Methods:
// Inside any subclass method, you can use `super.methodName()`
// to call a method from the parent class.

class Animal {
  constructor(name) {
    this.name = name;
  }
  animalName() {
    console.log(`The name of animal: ${this.name}`);
  }
}
class Dog extends Animal {
  constructor(name, sound) {
    super(name);
    this.sound = sound;
  }

  makeSound() {
    super.animalName();
    console.log(`${this.name} makes ${this.sound} sound`);
  }
}

let dog1 = new Dog("kale", "Barking ");
dog1.makeSound();

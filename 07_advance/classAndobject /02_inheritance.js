// inheritance is the concept of extending one class method and properties in
// another class

class Person {
  move() {
    console.log("Can able to move");
  }
  eat() {
    console.log("Can able to eat");
  }
}

class Engineer extends Person {
  work() {
    console.log("Create new things and solve problems");
  }
}

class Doctor extends Person {
  work() {
    console.log("Cure Patient");
  }
}

// creating object of type  Engineer
let erObj = new Engineer();
erObj.work();
erObj.eat();
erObj.move();

// creating object of type Doctor
let drObj = new Doctor();
drObj.work();
drObj.eat();
drObj.move();

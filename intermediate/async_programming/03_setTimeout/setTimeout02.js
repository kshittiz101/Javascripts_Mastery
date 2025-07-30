// Example 1: setTimeout using parameters
function greeting(personName) {
  console.log(`Good evening ${personName}`);
}

setTimeout(greeting, 1000, "Kshittiz");

// Example 2:  multiple parameters

let stuName = "harry Potter";
let age = 22;
let schoolName = "Harvard Boarding School";

function introduction(stuName, age, schoolName) {
  console.log(
    `Hello my name is ${stuName}, i am ${age} years old, my school name is ${schoolName}`
  );
}

setTimeout(introduction, 1500, stuName, age, schoolName);

// Example 3: Arrow function
setTimeout(
  (stuName, age, schoolName) => {
    console.log(
      `This is from arrow function, Student Name: ${stuName}, Student Age: ${age}, School Name: ${schoolName}`
    );
  },
  2000,
  stuName,
  age,
  schoolName
);

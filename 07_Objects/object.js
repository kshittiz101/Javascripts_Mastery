// object in js

// Destructuring Objects
// For objects, destructuring lets you extract properties into variables:
let person = {
    'name':'kshittiz',
    'age':22,
    'address':'Nepal',
};

let {name, address} = person;
msg = `my name is ${name} and i am from ${address}`;
// console.log(name)
// console.log(address)

console.log(msg);


// Default Values
// You can also provide default values if the property or index does not exist:

let person2 = {
    'name':'Rahul',
    'address':'Bara',

};

let {stuname, age=25} = person2;
// you can't declare name again because it is already declare
// let {name, age=25} = person2
// SyntaxError: Identifier 'name' has already been declared

msg2 = `Name: ${stuname} age: ${age}`;
console.log(msg2);

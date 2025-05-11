// for in loop in js
// for in loop is used for iterate over object properties

// important note: Use this loop only for objects, not arrays.

let obj = {
  name: 'kshittiz',
  age: 22,
  city: 'kathamandu',
  'country name': 'nepal',
};

for (key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

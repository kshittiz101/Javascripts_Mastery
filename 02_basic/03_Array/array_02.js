// 3 create an array with an Array.of() and Array.from()
let arrayOfFruits = Array.of("orange", "apple", "banana", "papaya");
for (fruit in arrayOfFruits) {
  console.log(fruit);
}
// output will be indexes of the array variable not a value
// because, The for...in loop in JavaScript is designed to iterate over
// the enumerable properties of an object. When used on an array, it iterates over the array indices (keys),
// which are the positions of the elements in the array (0, 1, 2, 3 in this case).

// corrected code
// let arrayOfFruits = Array.of("orange", "apple", "banana", "papaya");
for (let fruit of arrayOfFruits) {
  console.log(fruit);
}

// Note:
// for...in Loop: Iterates over the enumerable properties (keys) of an object.
// for...of Loop: Iterates over the values of an iterable object like an array.

// Array.from()
let listNamesLetter = Array.from("Kshittiz");
for (let letter of listNamesLetter) {
  console.log(letter);
}

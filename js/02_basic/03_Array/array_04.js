//1. indexOf
//
// let arr1 = ["ram", "sita", "hari", "shyama"];
// console.log(arr1.indexOf("ram")); // index of first occurrence element
// console.log(arr1.indexOf("kc")); // -1 if not found

// let arr2 = ["ram", "sita", "hari", "shyama", "hari", "sita"];
// console.log(arr2.indexOf("sita"));
// output will be 1 because the first occurrence of
// the sita is in index 1 and second one is in last index (length-1)

// 2. splice
// it remove or add element in an array
// let listOfItems = ["apple", "banana", "grapes", "tomato", "potato", "orange"];
// let listOfVeg = listOfItems.splice(3, 2);

// for (let item of listOfItems) {
//   console.log(item);
// }

// for (let item of listOfVeg) {
//   console.log(item);
// }

// adding element value using splice
// console.log("--------------------------------------");
// listOfItems.splice(3, 2, "papaya", "sugarcane");
// for (let item of listOfItems) {
//   console.log(item);
// }

// 3. Concat
// join one or two array
// let numList1 = [10, 20, 30, 40];
// let numList2 = [50, 60, 70, 80, 90];

// let mixList = numList1.concat(numList2);
// for (let num of mixList) {
//   console.log(num);
// }

// 4. include
// include method used to determine whether the certain element is in  an array or not
// let fruits = ["apple", "orange", "banana"];
// let hasApple = fruits.includes("apple");
// console.log(hasApple); // output true

// 5. join()
// join all element of an array into a single string
// let stringFruits = fruits.join(", ");
// console.log(stringFruits);
// console.log(typeof stringFruits);

// 6. reverse()
let listOfFruits = ["apple", "banana", "Grapes"];
let reverseFruits = listOfFruits.reverse();
for (let fruit of reverseFruits) {
  console.log(fruit);
}

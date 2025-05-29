let arr = ['apple', 'banana', 'grapes', 'avocado'];

console.log(arr.length);

let len = arr.length - 1;

for (let i = 0; i <= len; i++) {
  if (arr[i].startsWith('a')) {
    continue;
  } else {
    console.log(arr[i]);
  }
}

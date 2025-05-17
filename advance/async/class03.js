// In JavaScript, a callback is a function passed as an argument to another function, which is then invoked (called back) at a later time — either synchronously or asynchronously.

// function getTwoNumberAndSum(num1, num2, addTwo) {
//   console.log(num1, num2);
//   addTwo(num1, num2);
// }

// function addTwoNumber(num1, num2) {
//   console.log('sum: ', num1 + num2);
// }

// getTwoNumberAndSum(10, 20, addTwoNumber);

function getTwoNumberAndSum(num1, num2, onSucess, onFail) {
  console.log(num1, num2);
  if (typeof num1 == 'number' && typeof num2 == 'number') {
    onSucess(num1, num2);
  } else {
    onFail();
  }
}

// function addTwoNumber(num1, num2) {
//   console.log('sum: ', num1 + num2);
// }

// function invalidData(num1, num2) {
//   console.log('Invalid data types');
// }
// getTwoNumberAndSum(100, 20, addTwoNumber, invalidData);

getTwoNumberAndSum(
  '100',
  222,
  (num1, num2) => {
    console.log('sum:', num1 + num2);
  },
  () => {
    console.log('Invalid data types');
  }
);

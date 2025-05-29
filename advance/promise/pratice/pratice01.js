// syntax of promise
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('Data is fetched ');
  } else {
    reject('Unable to fetch data');
  }
});

console.log(promise);

promise
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });

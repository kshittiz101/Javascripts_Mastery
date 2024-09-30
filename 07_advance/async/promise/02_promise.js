// example of promise in js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      if (data) {
        resolve(data);
      } else {
        reject("Unable to get data");
      }
    }, 5000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

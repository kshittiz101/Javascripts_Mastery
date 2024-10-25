
function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();  // Executes the callback after fetching the data
  }, 1000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);  // 'processData' is passed as a callback
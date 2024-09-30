function first(callback) {
  setTimeout(() => {
    console.log("First Function completed ");
    callback();
  }, 2000);
}

function second(callback) {
  setTimeout(() => {
    console.log("Second Function is Completed");
    callback();
  }, 2000);
}

function third(callback) {
  setTimeout(() => {
    console.log("Third Function is Completed");
    callback();
  }, 2000);
}

function fourth() {
  setTimeout(() => {
    console.log("Fourth Function is Completed");
  }, 2000);
}

// this structure is not maintainable, easy to understand, and read as well
first(() => {
  second(() => {
    third(() => {
      fourth();
    });
  });
});

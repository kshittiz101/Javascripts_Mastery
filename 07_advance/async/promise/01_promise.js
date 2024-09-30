let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("this is a promise");
    resolve("success");
  }, 10000);
});

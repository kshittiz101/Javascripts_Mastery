function outerFun() {
  let name = "kshittiz";

  function innerFun() {
    console.log(name);
  }
  return innerFun;
}

let myFun = outerFun();
myFun();

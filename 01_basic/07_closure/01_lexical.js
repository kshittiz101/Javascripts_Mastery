// lexical scope
// in lexical scope inner function can access outer or parent function
// variable or scope but parent can't able to access inner function scope
function outer() {
  let name = "kshittiz";
  function inner() {
    console.log(name);
  }
  inner();
}

outer();

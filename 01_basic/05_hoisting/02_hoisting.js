// hoisting in function
greeting();
function greeting() {
  console.log("hello i am kc");
}
// greet(); //Cannot access 'greet' before initialization
let greet = function () {
  console.log("Hello again");
};
greet();

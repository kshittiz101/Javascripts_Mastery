# Closure in Javascripts

Closures in JavaScript are powerful and versatile. They allow inner functions to access variables from their outer function's scope, even after the outer function has returned. Here are some common use cases of closures:

### 1. **Data Privacy and Encapsulation**

Closures allow you to create private variables and methods, which can't be accessed directly from outside the function. This is useful for encapsulating and protecting data.

```javascript
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let increment = counter();
increment(); // 1
increment(); // 2
```

In this case, the `count` variable is private, and only accessible through the inner function.

### 2. **Creating Factory Functions**

Closures enable the creation of factory functions that generate functions with specific behavior based on input.

```javascript
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

let double = multiplier(2);
console.log(double(5)); // 10

let triple = multiplier(3);
console.log(triple(5)); // 15
```

Here, the factory `multiplier` generates customized functions (`double` and `triple`), each remembering their respective factor.

### 3. **Callback Functions**

Closures are widely used in callback functions, especially in asynchronous operations such as event listeners, timers, and network requests.

```javascript
function delayMessage(message, delay) {
  setTimeout(function () {
    console.log(message);
  }, delay);
}

delayMessage("Hello after 2 seconds", 2000);
```

The callback function inside `setTimeout` has access to the `message` variable due to closure.

### 4. **Currying**

Currying is a functional programming concept where a function with multiple arguments is transformed into a sequence of nested functions with single arguments. Closures enable currying in JavaScript.

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

let addFive = add(5);
console.log(addFive(10)); // 15
```

Here, the function `add` is curried using closures, allowing you to partially apply the arguments.

### 5. **Maintaining State in Asynchronous Operations**

Closures help maintain and persist state in asynchronous functions like `setTimeout` or `setInterval`.

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let counter = createCounter();
setInterval(counter, 1000); // Keeps incrementing the counter every second
```

The variable `count` is preserved across multiple invocations of the `counter` function, even though the function was returned earlier.

### 6. **Event Handlers and DOM Manipulation**

Closures are often used in event handling to bind variables or states to event listeners.

```javascript
function handleButtonClick(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

document.getElementById("green").onclick = handleButtonClick("green");
document.getElementById("red").onclick = handleButtonClick("red");
```

Each button click handler remembers the `color` variable due to closures.

### 7. **Iterating Over Loops with `let` (Fixing the Loop Issue with `var`)**

Closures can help capture the correct value of variables in loops, especially when using `var`.

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Without closure, this prints 4 three times
  }, 1000);
}

// Fixed with closure
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Prints 1, 2, 3 correctly
  }, 1000);
}
```

Closures in conjunction with `let` ensure the correct value of `i` is captured at each iteration.

### 8. **Memoization (Function Caching)**

Closures allow for storing function results (caching) to improve performance by avoiding repeated calculations.

```javascript
function memoize(fn) {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

const factorial = memoize(function (n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5)); // Calculates and stores the result
console.log(factorial(5)); // Fetches the result from cache
```

The `memoize` function uses a closure to maintain the cache.

### 9. **Partially Applied Functions**

Closures can be used to create partially applied functions, where some arguments are preset, and the rest are provided later.

```javascript
function greet(greeting) {
  return function (name) {
    console.log(greeting + ", " + name);
  };
}

let sayHello = greet("Hello");
sayHello("Kshittiz"); // Hello, Kshittiz
```

### 10. **Module Pattern**

Closures can be used to simulate private and public variables/methods, creating a modular structure in JavaScript.

```javascript
const counterModule = (function () {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function reset() {
    count = 0;
  }

  return {
    increment: increment,
    reset: reset,
  };
})();

counterModule.increment(); // 1
counterModule.increment(); // 2
counterModule.reset();
counterModule.increment(); // 1
```

This pattern creates an immediately invoked function expression (IIFE) to enclose the private variable `count` while exposing public methods like `increment` and `reset`.

---

### Summary:

Closures are useful in:

- **Data privacy** and encapsulation
- **Creating factory functions**
- **Asynchronous operations** with callbacks
- **Currying and partial application**
- **Memoization and caching**
- **Managing state** in iterative or event-driven code
- **Implementing module patterns** in JavaScript

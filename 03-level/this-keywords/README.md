# Understanding `this` in JavaScript

In JavaScript, `this` refers to **the object that is currently executing the function**.  
It’s a **dynamic reference** — its value depends on **how the function is called**, not where it's defined.

---

## Golden Rule

> **"Who called the function?"** — That’s usually what `this` refers to.

---

## `this` in Different Contexts

### 1. Inside an Object Method

```js
const user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // Output: Alice
```

`this` refers to the object (`user`) that called the method.

---

### 2. Inside a Regular Function (Non-strict mode)

```js
function show() {
  console.log(this);
}

show(); // Output: window (in browsers)
```

`this` refers to the **global object** (`window` or `global`).

---

### 3. Inside a Regular Function (Strict mode)

```js
"use strict";
function show() {
  console.log(this);
}

show(); // Output: undefined
```

`this` is `undefined` because strict mode prevents binding to the global object.

---

### 4. Inside an Event Listener

```js
button.addEventListener("click", function () {
  console.log(this); // Refers to the button element
});
```

`this` refers to the **DOM element** that fired the event.

---

### 5. Inside an Arrow Function

```js
const user = {
  name: "Bob",
  greet: () => {
    console.log(this.name);
  },
};

user.greet(); // Output: undefined
```

`this` is **not bound** in arrow functions. It uses the `this` from its **surrounding (lexical) scope**.

---

### 6. Inside a Class

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p1 = new Person("Eve");
p1.sayHello(); // Output: Hi, I'm Eve
```

`this` refers to the **instance** of the class.

---

### 7. Using `call()`, `apply()`, and `bind()`

```js
function greet() {
  console.log(this.name);
}

const person = { name: "Sam" };

greet.call(person); // Sam
greet.apply(person); // Sam
const boundGreet = greet.bind(person);
boundGreet(); // Sam
```

These methods **manually set** the value of `this`:

- `call()` and `apply()` — invoke the function immediately.
- `bind()` — returns a **new function** with a bound `this`.

---

## Quick Reference Table

| Situation                 | What `this` refers to                        |
| ------------------------- | -------------------------------------------- |
| Object method             | The object                                   |
| Regular function          | `window` (non-strict) / `undefined` (strict) |
| Arrow function            | Lexical `this` (from surrounding scope)      |
| Class method              | The instance of the class                    |
| Event listener            | The element that triggered the event         |
| `call` / `apply` / `bind` | The explicitly defined object                |

---

## Common Mistakes

- Using arrow functions as object methods — arrow functions don’t bind `this`.
- Forgetting `this` changes in async functions like `setTimeout`.
- Assuming `this` refers to the function’s owner — it actually refers to the **caller**.

---

## Practice Challenge

### Q: What will this log?

```js
const name = "Global";

const person = {
  name: "Alex",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

person.greet();
```

**Answer: `"Global"`**  
Because the regular function inside `setTimeout` runs in the global context.

### Fix with Arrow Function:

```js
greet() {
  setTimeout(() => {
    console.log(this.name); // Output: Alex
  }, 1000);
}
```

The arrow function captures `this` from the `greet` method's scope.

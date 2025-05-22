# **JavaScript Promises - Comprehensive Notes**

## **1. Introduction to Promises**

A **Promise** in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

- Promises help avoid **callback hell** and make async code more readable.
- A Promise can be in one of three states:
  1. **Pending** – Initial state, neither fulfilled nor rejected.
  2. **Fulfilled** – The operation completed successfully.
  3. **Rejected** – The operation failed.

---

## **2. Creating a Promise**

A Promise is created using the `Promise` constructor, which takes an **executor function** with `resolve` and `reject` parameters.

### **Syntax:**

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (success) {
    resolve(value) // Promise is fulfilled
  } else {
    reject(error) // Promise is rejected
  }
})
```

### **Example:**

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' }
    const error = false

    if (!error) {
      resolve(data) // Success
    } else {
      reject('Error fetching data!') // Failure
    }
  }, 1000)
})
```

---

## **3. Consuming Promises**

Promises are consumed using `.then()`, `.catch()`, and `.finally()`.

### **`.then()` – Handling Fulfillment**

- Takes a callback that runs when the Promise is resolved.
- Can be chained for sequential async operations.

```javascript
fetchData.then((data) => {
  console.log('Success:', data)
})
```

### **`.catch()` – Handling Rejection**

- Takes a callback that runs when the Promise is rejected.

```javascript
fetchData
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))
```

### **`.finally()` – Runs Regardless of Outcome**

- Executes after `.then()` or `.catch()`.

```javascript
fetchData
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log('Promise settled!'))
```

---

## **4. Chaining Promises**

Promises can be chained to avoid **callback hell**.

### **Example:**

```javascript
fetchData
  .then((data) => {
    console.log('Step 1:', data)
    return data.id // Pass to next .then()
  })
  .then((id) => {
    console.log('Step 2:', id)
    return `User ID: ${id}`
  })
  .then((message) => {
    console.log('Step 3:', message)
  })
  .catch((error) => console.error(error))
```

---

## **5. Promise Methods**

### **`Promise.all()`**

- Takes an array of Promises and resolves when **all** are resolved.
- Fails if **any** Promise rejects.

```javascript
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve) => setTimeout(resolve, 1000, 3))

Promise.all([p1, p2, p3])
  .then((values) => console.log(values)) // [1, 2, 3]
  .catch((error) => console.error(error))
```

### **`Promise.race()`**

- Resolves or rejects as soon as **any** Promise in the array settles.

```javascript
const p1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'))
const p2 = new Promise((resolve) => setTimeout(resolve, 1000, 'Second'))

Promise.race([p1, p2]).then((result) => console.log(result)) // "First"
```

### **`Promise.allSettled()`**

- Waits for **all** Promises to settle (either resolve or reject).

```javascript
const p1 = Promise.resolve(1)
const p2 = Promise.reject('Error')

Promise.allSettled([p1, p2]).then((results) => console.log(results))
/* Output:
    [
      { status: "fulfilled", value: 1 },
      { status: "rejected", reason: "Error" }
    ]
  */
```

### **`Promise.any()`**

- Resolves when **any** Promise fulfills (ignores rejections unless all fail).

```javascript
const p1 = Promise.reject('Error 1')
const p2 = Promise.resolve('Success')

Promise.any([p1, p2]).then((result) => console.log(result)) // "Success"
```

---

## **6. Async/Await (Syntactic Sugar for Promises)**

- `async` functions return a Promise.
- `await` pauses execution until the Promise settles.

### **Example:**

```javascript
async function fetchUser() {
  try {
    const response = await fetchData // Waits for fetchData to resolve
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

fetchUser()
```

---

## **7. Error Handling in Promises**

- Use `.catch()` or `try/catch` with `async/await`.
- Unhandled rejections can crash Node.js (use `process.on('unhandledRejection', ...)`).

### **Example:**

```javascript
fetchData
  .then((data) => {
    throw new Error('Something went wrong!')
  })
  .catch((error) => console.error('Caught:', error))
```

---

## **8. Summary**

| Concept                | Description                        |
| ---------------------- | ---------------------------------- |
| `new Promise()`        | Creates a new Promise.             |
| `.then()`              | Handles resolved Promises.         |
| `.catch()`             | Handles rejected Promises.         |
| `.finally()`           | Runs after resolution/rejection.   |
| `Promise.all()`        | Waits for all Promises to resolve. |
| `Promise.race()`       | Returns the first settled Promise. |
| `Promise.allSettled()` | Waits for all Promises to settle.  |
| `Promise.any()`        | Resolves if any Promise fulfills.  |
| `async/await`          | Cleaner syntax for Promises.       |

---

## **9. Practical Example**

```javascript
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: 'Alice' })
      } else {
        reject('User not found!')
      }
    }, 1000)
  })
}

getUser(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
```

---

### **Final Notes:**

✅ Promises simplify async operations.
✅ Use `.then()`, `.catch()`, and `.finally()` for handling.
✅ Chain Promises for sequential async tasks.
✅ `async/await` makes Promises even cleaner.
✅ Always handle errors to avoid uncaught rejections.

---

# JavaScript Events

## 1️⃣ What are JavaScript Events?

Events are actions or occurrences that happen in the browser (e.g., clicks, key presses, mouse movements). JavaScript can detect these events and execute functions in response.

---

## 2️⃣ Types of Events

### 1. Mouse Events

- `click` – When an element is clicked.
- `dblclick` – When an element is double-clicked.
- `mousedown` – When the mouse button is pressed down.
- `mouseup` – When the mouse button is released.
- `mousemove` – When the mouse is moved.
- `mouseenter` – When the mouse enters an element.
- `mouseleave` – When the mouse leaves an element.

### 2. Keyboard Events

- `keydown` – When a key is pressed down.
- `keyup` – When a key is released.
- `keypress` – When a key is pressed (deprecated, use `keydown`).

### 3. Form Events

- `submit` – When a form is submitted.
- `change` – When the value of an input changes.
- `focus` – When an input field is focused.
- `blur` – When an input field loses focus.

### 4. Window Events

- `load` – When the page is fully loaded.
- `resize` – When the window is resized.
- `scroll` – When the user scrolls.
- `unload` – When the page is about to be closed.

---

## 3️⃣ How to Handle Events

There are three common ways to handle events in JavaScript:

### 1. Inline HTML Events (Not Recommended)

```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

### 2. Using JavaScript `addEventListener()` (Best Practice)

```js
document.getElementById("myBtn").addEventListener("click", function () {
  alert("Button Clicked!");
});
```

### 3. Using Event Handler Properties

```js
const btn = document.getElementById("myBtn");
btn.onclick = function () {
  alert("Button Clicked!");
};
```

---

## 4️⃣ Example: Click Event

```html
<button id="btn">Click Me</button>

<script>
  document.getElementById("btn").addEventListener("click", () => {
    alert("You clicked the button!");
  });
</script>
```

---

## 5️⃣ Event Object (`event`)

The `event` object provides information about the event:

```js
document.getElementById("btn").addEventListener("click", function (event) {
  console.log("Event Type:", event.type);
  console.log("Target Element:", event.target);
});
```

---

## 6️⃣ Prevent Default Action

Some events have default actions (e.g., form submission). Use `preventDefault()` to stop them:

```js
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submission prevented!");
});
```

---

## 7️⃣ Event Delegation

Instead of adding event listeners to multiple elements, use event delegation:

```js
document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert("Button inside parent clicked!");
  }
});
```

---

## 8️⃣ Summary

- JavaScript events allow interaction with the webpage.
- `addEventListener()` is the best way to handle events.
- The `event` object provides details about the event.
- Use `preventDefault()` to stop default behaviors.
- Use event delegation for efficient event handling.

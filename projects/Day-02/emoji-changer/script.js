// console.log(emojis[0].title);

// getting element
let btn = document.getElementById("btn");
let title = document.getElementById("title");
let image = document.getElementById("image");

// initially
let index = 0;
title.textContent = emojis[index].title;
// setAttribute() method doesnot return any value so when we use console
// it will return undefined
image.setAttribute("src", emojis[index].image);
console.log(image.getAttribute("src"));

btn.addEventListener("click", () => {
  index = Math.floor(Math.random() * emojis.length);
  title.textContent = emojis[index].title;
  image.setAttribute("src", emojis[index].image);
});

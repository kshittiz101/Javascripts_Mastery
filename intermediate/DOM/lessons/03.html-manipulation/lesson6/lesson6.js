let content = document.getElementById("content");
console.dir(content);

let image = document.createElement("img");
let imgSrc =
  "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww";
image.setAttribute("src", imgSrc);
image.setAttribute("class", "image-container");

content.append(image);

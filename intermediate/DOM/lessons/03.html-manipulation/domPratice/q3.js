// 3. Create a <div> tag in html and give it a class & some styling. Now create a new class in css and try
// to append this class to the <div> element.

let box = document.querySelector(".box");
let oldClass = box.getAttribute("class");

box.setAttribute("class", `${oldClass} newClass`);
console.log(box.attributes);
// console.log(oldClass);

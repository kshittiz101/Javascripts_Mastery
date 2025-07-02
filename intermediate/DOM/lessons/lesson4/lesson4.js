// changing html elements
let content = document.getElementById("content");
let h2 = document.getElementsByTagName("h2")[0];
console.log(content);

// getting tags
console.log(content.tagName); // this will only return element
console.log(content.nodeName); // this will return element, text, comment

// text
console.log(content.innerHTML);
// it will respect style: display:none; visibility:none
console.log(content.innerText);
console.log(h2.textContent);

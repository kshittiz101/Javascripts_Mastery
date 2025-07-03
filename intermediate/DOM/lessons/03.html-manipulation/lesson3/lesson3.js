// Dom selection method to select html

// 1.getElementById('IdName')
// 2.getElementsByTagName('h2')
// 3.getElementsByClassName('className)
// 4.querySelector('cssSelector')
// 5.querySelectorAll('cssSelector')
let h2 = document.getElementById("myId"); // this will provide single  element
console.log(h2);

let p = document.getElementsByTagName("p"); // this will provide htmlCollection
console.log(p);

let className = document.getElementsByClassName("one"); // this will provide htmlCollection
console.log(className);

let singleELement = document.querySelector(".one"); // this is provide only first element or class or id
console.log(singleELement);

let nodeList = document.querySelectorAll("h2"); //NodeList(3) [h2, h2, h2]
console.log(nodeList);

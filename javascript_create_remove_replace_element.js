/*
// Create an Element
let element = document.createElement('li');
// Add classname , id and set attributes
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title','mytitle');
element.innerText = 'Hello, this is created with the help of javascript';
let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element); */


// REPLACE ELEMENT AND CHILD

// We can also create element with the help of createTextNode

/* let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

// Replacing child element
let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('myli'));
console.log(myul); */


// QUIZ

/* let elem4 = document.createElement('h3');
elem4.className = 'elem4';
elem4.id = 'elem4';
elem4.innerText = 'Go to Code with Harry';
let body = document.body;
body.appendChild(elem4);

let a = document.createElement('a');
a.setAttribute('href','/www.codewithharry.com');
let linkNode = document.createTextNode('Go to codewithharry');
a.appendChild(linkNode);
body.appendChild(a);
console.log(a); */


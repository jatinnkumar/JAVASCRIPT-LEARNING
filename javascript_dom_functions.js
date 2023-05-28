//let a = window;
//a = alert("Hello Jatin...");
//a = prompt('What is your name...');
//a = confirm('Are you sure you want to delete this page?');
//console.log(a);


// Javascript  DOM

/*let a = document;
a = document.body;
a = document.forms;
a = document.links;
a = document.links[0];
a = document.links[0].href;
a = document.images;
a = document.scripts;
a = document.scripts[0];
console.log(a); */

// Following methods are single element selector

/* let element = document.getElementById('myFirst');
element.style.color = 'blue';
element.innerText = 'Javasacript';
element.innerHTML = '<strong>Javascript</strong>';

let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
console.log(sel);

// By using following method we can select multiple elements

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = "orange";
});

// We can also change the value of input tag 

document.getElementById('search').value = 'we can also change the value of input tag...'; */

// Children , Parent & Traversing the DOM

/* let cont = document.querySelector('.container');
 console.log(cont);
console.log(cont.childNodes); // Includes newlines and comments  also
console.log(cont.children); // Includes only elements (mainly use children intead of childNodes)

let container = document.querySelector('.container');
console.log(container.children[1].children[0].children[4]);

console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.firstElementChild.nextElementSibling);

console.log(container.lastChild);
console.log(container.lastElementChild);

let colorChange = container.children[1].children[0].children[4];
colorChange.style.color = 'red';

// or

container.children[1].children[0].children[3].style.color = 'skyblue'; */








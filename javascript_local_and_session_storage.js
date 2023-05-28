// LOCAL STORAGE (This data will remain in browser untill you will clear it)

// Set Items

localStorage.setItem('Name','Jatin');
localStorage.setItem('Name2','Ansh');
// localStorage.clear(); // This line will clear the local Storage 

//Clear a particular key value pair
localStorage.removeItem('Name');
// Retrieve(Get) Items

let name = localStorage.getItem('Name');
console.log(name);

let myArr = ['apple','mango','guava']; // We can not store an array in localStorage directly
localStorage.setItem('Fruits',JSON.stringify(myArr)); // To atore an array in localStorage,We will have to convert it into a string
let Fruits  = JSON.parse(localStorage.getItem('Fruits')); // To retrieve an array we will have to write whole retrieving line of code into a JSON.parse function
console.log(Fruits);


// SESSION STORAGE (This data will get clear after when you close your browser)

// same as localStorage
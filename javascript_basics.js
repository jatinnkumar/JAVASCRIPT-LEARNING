//STARTING

/* console.log('hello console !');
 console.log('hello world !');
 console.log(3+34);
 console.log(true);
 console.warn('This is warning!'); */


// VARIABLES

/* var name = "jatin";
console.log(name);
var channel;
var channel = "hello my name is jatin";
console.log(channel);
var city = "delhi";
console.log(city); */ 

/* const pie = 3.14;
console.log(pie);
//pie = "hello"; // we can not overwrite const varibales...

/* {
    let city = "chandigarh";
    city = "kolkata";
    console.log(city);
} 
console.log(city); */


//DATATYPES (Premitive datatypes)

//Strings
/* let name = "jatin";
console.log("My name is " + name + ".");
console.log(`My name is ${name}.`); // Using backticks will help you to avoid complex concatenation with the help of '+' operator...
console.log("Datatype is " + (typeof name));

//Numbers
let marks = 34;
console.log(marks);
console.log("Datatype is " + (typeof marks));

//Boolean
let isDriver = true;
console.log(isDriver);
console.log("Datatype is " + (typeof isDriver));

//null
let nullVar = null;
console.log("Datatypes is " + (typeof nullVar));

//undefined
let undef = undefined;
let table;
console.log("Datatype is " + (typeof unedef));
console.log("Datatype is " + (typeof table)); */

//DATATYPES (Reference datatypes)

//Arrays
/* let myarr = [12,23,43,false,"string"]; // we can insert any premitve datatype in reference datatype...
console.log(myarr);

//Object literals
let stMarks = {
    harry : 89,
    shubham : 45,
    sachin : 23,
    raman : 47,
    'jatin kumar' : 38 // Don't use space in keys of object , and if you want to use space in keys then put your key in single or double quotes...  
}
console.log(stMarks);

//Function
function sum(){

}
console.log("Datatype is " + (typeof sum));

//Date
let date = new Date();
console.log("Datatype is " + (typeof date)); */

//TYPE CONVERSION AND TYPE COERCION
//Type conversion

/* let num = 34;
console.log(typeof num);
num = String(34);
console.log(typeof num);
num = '34';
console.log(typeof num);

let arr = [1,2,3,4,5,6,7];
console.log(arr.length); // Output of this line is 7 because there are 7 elements in array
console.log(typeof arr);
arr = String([1,2,3,4,5,6,7]); // Output of this line 13 because after conversion of variable into string all commas are also being included... 
console.log(typeof arr); // After conversion of datatype into string we can perform different string functions on that variable...
console.log(arr.length);

let i = 34;
console.log(i.toString());

let str = "3444";
console.log(typeof str);
str = Number("3444");
console.log(typeof str); */

//Type  coercian

/* let str = "3435";
let num = 346;
console.log(str + num); // If we add a string and a number variables then number variable will be converted into string and then will concatenate with another string...

str = Number("3435");
num = 5;
console.log(str + num); */ // Now type of both variables is number so both numbers will get added...  


//STRING

 /* let wish = 'Good morning,';
let name = 'jatin';
let sirName = 'kumar';
console.log(wish + ' ' + name + ' ' + sirName + '.');

let html = 'Hello,';
html = html.concat('jatin kumar.');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[0]);
console.log(html[1]);
console.log(html[2]);
console.log(html[3]);
console.log(html[4]);
console.log(html.indexOf('jatin'));
console.log(html.indexOf('ku')); // indexOf will give the first occurence of character...
console.log(html.lastIndexOf('a')); // lastIndexOf will give the last occurence of character...
console.log(html.charAt(4)); // charAt will give the character at specified index number...

let string = 'my name is karan';
console.log(string.endsWith('ran')); // endsWith will check whether the string is ending with specified characters and it will return boolean value...
console.log(string.includes('ame')); // includes will check whether the specified characters are included in string or not and will return a boolean value...
console.log(string.substring(3,6));
console.log(string.split('a'));
console.log(string.split(' '));
console.log(string.replace('karan','jatin'));

let color = ['red','blue'];
let myHtml = `<h2>Hello ${name}, your favourite colors are ${color[0]} and ${color[1]}.</h2>`;
console.log(myHtml);
document.body.innerHTML = myHtml; */


// ARRAYS

/* let marks = [23,34,45,67,78];
console.log(marks.indexOf(45));
let value = marks.indexOf(78);
console.log(value);

marks.push(67); // push will add integer in the last of an array...
console.log(marks);
marks.unshift(29); // unshift will  add integer in the beggining of an array...
console.log(marks);
marks.pop(); // pop will remove last element of an array...
console.log(marks);
marks.shift(); // shift will remove first element of an array...
console.log(marks);
marks.splice(1,2); // will remove 2(second argument) elements starting from the index 1(first argument)...
console.log(marks);
marks.reverse(); // will reverse an array...
console.log(marks); */

// Concatenate arrays

/* let marks1 = [12,23,34,45,56,67];
let marks2 = [98,87,76,65,54,43];

marks1  = marks1.concat(marks2);
console.log(marks1); */


// Object

/* let myObj = {
    name : 'jatin kumar',
    'sir name' : 'pal',
    marks : [12,23,34,45,56],
    isActive : true
}
// Therev are two ways to print the values of keys in object...
console.log(myObj);
console.log(myObj.marks);
console.log(myObj.isActive);
console.log(myObj.name);
console.log(myObj['sir name']);
console.log(myObj['name']);
console.log(myObj['marks']);
console.log(myObj['isActive']); */


// IF ELSE AND SWITCHES 

/* let age = 65;
if(age == 19) {
    console.log('You are 19.');
}
else if (age == 65) {
    console.log('You are 65.');
}
else {
    console.log('You are not 19.');
}
 
let name; // if you want to check whether the variable is defined or not , then follow below method...
if(typeof name !== 'undefined') {
    console.log('Variable is defined...');
}
else {
    console.log('Variable is not defined...');
}

canDrive = false;
age = 19; // we can also use boolean values in conditions
if(canDrive) { 
    console.log('You can drive.');
}
else {
    console.log('You can not drive.');
}

if(canDrive && age>18) {
    console.log('You can drive.');
}
else {
    console.log('You can not drive.');
}

if(canDrive || age>18) {
    console.log('You can drive.');
}
else {
    console.log('You can not drive.');
} 

// Ternary Operartor

let firstName = 'jatin';
console.log(firstName == 'jatin' ? 'Your name is Jatin.' : 'Your name is something else.'); */


// LOOPS

// For loop

/* for(i=1; i<=10;i++) {
    if (i==3) {
        continue;
    }
    console.log(i);
}

// While loop

let j=1;
while(j<11) {
    console.log(j);
    if (j===5) {
        break;
    }
    j++;
}

// Do while loop

let k = 101;
do {
    console.log(k);
    k++;
} while(k<10);

// Foreach loop (printing all elements of an array)

let numbers = [12,23,34,45,56,67,68];   // old way to print all the elements of an aaray

for (let i = 0; i<numbers.length; i++) {    
    const element = numbers[i];
    console.log(element);
}

let fruits = ['orange', 'apple', 'mango','grapes', 'pineapple'];  // modern way to print all the elements of an aaray

fruits.forEach(function(element){ 
    console.log(element);
})

// Printing key values of an object using loop

let emp = {
    name : 'jatin',
    age : 22,
    type : 'programmer',
    os : 'window'
}

for (key in emp) {
    console.log(`The ${key} of employee is ${emp[key]}.`);
}  */


// FUNCTIONS

// These functions are not returning any value...
/* function greet(naam) {
    console.log(`Hello ${naam}, Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor. Wishing you a very happy and fun-filled birthday!
    May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!`)
}
greet(name);

function sum(num1,num2) {
    let sum = num1+num2;
    console.log(`The sum of number is ${sum}.`);
}
sum(2456,678);

// This function is returning value and stores the value to function where it is called...
function multiply(num1,num2) {
    let mult = num1*num2;
    return mult;
}
let result = multiply(23,3);
console.log(`The multiplication result of given numbers is ${result}.`);

// Function in an object
let emp = {
    name : 'jatin',
    game : function(){
        return "GTA";
    }
}
console.log(emp.game());

// Function for iterating elments of an array
arr = ['fruit','vegetables','furniture'];
arr.forEach(function(element,index,array){
    console.log(element,index);
}); */


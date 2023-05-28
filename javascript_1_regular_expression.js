let reg = /jatin/;  // This is a regular expression literal in js
reg = /jatin/g; // g means global
// reg = /jatin/i; // i means case insensitive


// console.log(reg);
// console.log(reg.source);

let s = "This code written by jatin and jatin kumar";
// function to match expressions 
// 1. exec() :- This function will return an array for match and null for no match

// let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); // We can use multiple exec with global flag...

// console.log(result);
// console.log(result.input);
// console.log(result.index);

// 2. test() :- Returns true or false

// let result2 = reg.test(s);
// console.log(result2);

// 3. match() :- It will returns an array of results or null

// let result3 = reg.match(s); // This is wrong way to type this function...
// let result3 = s.match(reg); // This is right way to type this function...
// console.log(result3);

// 4. search :- Returns index of first match else returns -1

// let result4 = reg.search(s); // This is wrong way to type this function...
// let result4 = s.search(reg) // This is right way to type this function...
// console.log(result4);

// 5. replace() :- Returns new replaced string with all the replacements (if no global flag is given, only first match will be replaced )

let result5 = s.replace(reg, 'karan');
console.log(result5);
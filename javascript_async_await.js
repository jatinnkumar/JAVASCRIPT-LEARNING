// async function jatin() {
//     console.log('Inside jatin function');
//     const response = await fetch('https://api.github.com/users');
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved');
//     return users;
// }

// console.log('Before calling jatin');
// let a = jatin();
// console.log('afetr calling jatin');
// console.log(a);
// a.then(data => console.log(data))
// console.log('last line of this js file');


async function jatin() {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    return users;
}

let a = jatin();
a.then(function (data) {
    console.log(data);
})


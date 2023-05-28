let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

// GET REQUESTS

// function getData() {
//     url = "javascript_basics.js";
//     fetch(url).then((response) => {
//         return response.text();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// getData();

// function getData() {
//     url = "https://api.github.com/users";
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// getData();

// POST REQUEST

function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{ "name": "jhsdsdgsjgjhb", "salary": "123", "age": "23" }';
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: data    //  If data is string then we don't use JSON.stringify and if data is object then we use JSON.stringify...
    }
    fetch(url, params).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
}

postData();


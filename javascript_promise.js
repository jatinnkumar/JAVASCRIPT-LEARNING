
// Producing promise
// Promise as a function constructor

const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no);
        // reject('Error while communicating...');
    }, 2000);

});


// Promise as an object
const getBioData = (indexdata) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexdata) => {
            let biodata = {
                name: 'Jatin',
                age: 22
            }
            resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old.`);
        }, 2000, indexdata)
    });
}


// Getting output

myPromise.then((rollNo) => {
    console.log(rollNo);
    return getBioData(rollNo[1]);
}).then((roll_Number) => {
    console.log(roll_Number);
}).catch((error) => {
    console.log(error);
})
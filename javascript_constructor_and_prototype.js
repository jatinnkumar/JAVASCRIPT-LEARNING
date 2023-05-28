// Object literals for creating objects...
let car = {
    name: 'Nissan',
    'Top speed': 180,
    run: function () {
        console.log('Nissan is running');
    }
};
let a = car.name;
console.log(a);
console.log(car.run());
console.log(car['Top speed']);
console.log(car['name']);
console.log(car.run());

// CONSTRUCTOR
// We can use constructor for creating objects

function generalCar(name, speed) {
    this.name = name;
    this.topSpeed = speed;
    this.run = function () {
        console.log(`${this.name} is running.`);
    }
}

let car1 = new generalCar('Nissan', 180); // It will create an object with keys written in function...
console.log(car1);

let car2 = new generalCar('Hyundai', 189);
console.log(car2);

// PROTOTYPE
// If we want to add property and value to a constructor function then we have to use prototype

function Student(first, last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
};

Student.prototype.nationality = 'Indian';
Student.prototype.name = function () {
    return this.firstName + ' ' + this.lastName;
}

let student1 = new Student('Jatin', 'Kumar', 25, 10);
let student2 = new Student('Navi', 'Singh', 34, 12);
console.log(student1);
console.log(student1.name());

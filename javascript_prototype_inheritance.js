const proto = {
    slogan: function () {
        return `This company is best`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

// This creates jatin object

let jatin = Object.create(proto);
jatin.name = "jatin";
jatin.role = "programmer";

// Employee constructor

function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

Employee.prototype.slogan = function () {
    return `This company is best. Regards ${this.name}`;
}

let jatinObj = new Employee("jatin", 1000, 1);

// Programmer ( inherit from Employee)

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience)
    this.language = language; // for 4th(langauge) parameter , we created property and value manually...
}

// Inherit the prototype 

Programmer.prototype = Object.create(Employee.prototype); // Inheritting prototype of Employee (Code line : 24)

// Manually set the constructor 

Programmer.prototype.constructor = Programmer;

let raman = new Programmer("raman", 2, 2, "javascript");
console.log(raman);
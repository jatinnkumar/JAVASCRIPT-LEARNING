class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan() {
        return `I am ${this.name} and this company is best.`;
    }

    joiningYear() {
        return 2022 - this.experience;
    }

    static add(a, b) {   // We can not use "this" keyword in static function
        return a + b;
    }

}

let jatin = new Employee("Jatin", 2, "Division");
console.log(jatin);
console.log(jatin.joiningYear());
console.log(Employee.add(23, 34));

// INHERITANCE 

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language) {
        super(givenName, givenExperience, givenDivision);  // super means call the constructor of class from which we are inheritting properties...
        this.language = language;
    }

}

let raman = new Programmer("Raman", 3, "Division", "Python");
console.log(raman);
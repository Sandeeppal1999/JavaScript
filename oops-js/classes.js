'use strict';
console.log("Learning Clases in Js")
class Employee {
    constructor(name, age, empId, department, lang, exp) {
        this.name = name;
        this.age = age;
        this.empId = empId;
        this.department = department;
        this.lang = lang;
        this.exp = exp;
    }
    joiningYear() {
        return 2022 - this.exp;

    }
    static greeting() {
        return `you are great developer`;

    }
}

let obj1 = new Employee("sandeep", 23, 120803, "QA", "javascript", 2);
console.log(obj1);
console.log(obj1.joiningYear());
console.log(Employee.greeting());
// Inheritance in javascript

class Programmer extends Employee {
    constructor(name, age, empId, department, lang, exp, salary, project) {
        super(name, age, empId, department, lang, exp);
        this.salary = salary;
        this.project = project;
    }
    team() {
        return ` I am in Developement team and working on ${this.project} project.`
    }
}
let progObj = new Programmer("kuldeep", 45, 12090, "Management", "English", 10, 1200000, "shutterstock");
console.log(progObj);
console.log(progObj.team());
class Employee {
    constructor(name, age, designation) {
        this.empName = name;
        this.empAge = age;
        this.empDesignation = designation;
    }

    incrementAge() {
        this.empAge += 1;
    }
}

class Manager extends Employee {
    constructor(){
        super("Mayank", 10, "Manager")
        this.teamSize = 10;
    }
}

var managerOne = new Manager();
console.log(managerOne.empName);


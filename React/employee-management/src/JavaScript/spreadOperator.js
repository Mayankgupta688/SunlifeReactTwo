var employeeObject = {
    name: "Mayank",
    age: 20,
    designation: "Developer"
}

var clonedEmployee = {
    name: employeeObject.name,
    age: employeeObject.age,
    designation: employeeObject.designation
};

var anotherClone = {};
anotherClone.name = employeeObject.name;
anotherClone.age = employeeObject.age;
anotherClone.designation = employeeObject.designation

var forthClone = Object.create(employeeObject)

var thirdClone = Object.assign(employeeObject)

console.log(employeeObject === clonedEmployee)

clonedEmployee.name = "Anshul";

console.log(employeeObject.name);
var employeeObject = {
    name: "Mayank",
    age: 20,
    designation: "Developer"
}

var clonedObject = {
    ...employeeObject,
    name: "Anshul"
}

console.log(employeeObject === clonedObject)

console.log(clonedObject.name)

debugger;
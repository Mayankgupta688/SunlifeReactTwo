/*
Higher Order Functions:

1. Function that can recieve a function as a parameter
2. Function that returns a function 
3. Example: Callback function

*/

function getFunction(inputFunctionParameter) {
    inputFunctionParameter();
}

function sampleFunction() {
    console.log("Hello TechnoFunnel")
}

getFunction(sampleFunction)

getFunction(function namedFunction() {
    console.log("Hi React...")
})


getFunction(function() {
    console.log("Hi React...")
})

// Function returning a function

function returnFunction() {
    function sampleOtherFunction() {
        console.log("Hello World...")
    }

    return sampleOtherFunction
}

var sampleReturnedFunction = returnFunction();
sampleReturnedFunction();

// Arrow Function in Higher Order Function

function returnFunction() {
    var b = 10;
    var sampleOtherFunction = () => {
        var a = 10;
        console.log("Hello World..." + b)
        console.log(b)
    }

    console.log(a)

    return sampleOtherFunction
}

debugger;
var sampleReturnedFunction = returnFunction();

sampleReturnedFunction();
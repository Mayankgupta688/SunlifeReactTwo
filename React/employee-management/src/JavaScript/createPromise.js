var samplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var randomNumber = Math.floor(Math.random() * 100)
        if(randomNumber % 2 === 0) {
            resolve("Number is Even")
        } else {
            reject("Sorry, Number is Odd")
        }
    }, 10000)
})

samplePromise.then((data) => {
    console.log("You Passed. Congrats. " + data)
}, (rejectionData) => {
   alert("Rejection, You are gone");
   alert(rejectionData)
})
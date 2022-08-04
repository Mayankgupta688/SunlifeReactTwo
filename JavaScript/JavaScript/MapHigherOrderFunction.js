var arrayData = [10, 20, 30, 40];

var dataObject = arrayData.map(function(value, index) {
    return {
        key: index,
        keyValue: value
    }
})

debugger;
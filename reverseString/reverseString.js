const reverseString = function(string) {
    let startArray = string.split('');

    let newArray = []

    for (let i = startArray.length - 1; i >= 0; i--){
        newArray.push(startArray[i])
    }

    return newArray.join('')


};

module.exports = reverseString;

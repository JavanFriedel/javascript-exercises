const repeatString = function(string, repeatNum) {
    let stringOutput = ''
    if (repeatNum < 0){
        return 'ERROR'
    }
    for(let i = 0; i < repeatNum; i++){
        stringOutput += string;
    }

    return stringOutput;
};

module.exports = repeatString;

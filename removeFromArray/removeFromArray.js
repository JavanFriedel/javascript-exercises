const removeFromArray = function(...args) {
    let testArray = args[0]

    for (let i = 1; i < args.length; i++){
        let argPos = testArray.indexOf(args[i])

        if (argPos == -1){
            continue
        }
        testArray.splice(argPos, 1)
    }

    return testArray
};

module.exports = removeFromArray;

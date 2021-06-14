const sumAll = function(start, finish) {
    let sum = 0;

    if (start < 0 || finish < 0){
        return 'ERROR'
    }

    if (typeof(start) != 'number' || typeof(finish) != 'number'){
        return 'ERROR'
    }

    let small;
    let large;

    if (start > finish) {
        large = start;
        small = finish;
    } else {
        large = finish;
        small = start;
    }

    for (let i = small; i <= large; i++){
        sum += i;
    }

    return sum
};

module.exports = sumAll;

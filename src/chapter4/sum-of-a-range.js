const range = (first, second, step) => {
    let array = [];
    step = step === 'undefined' ? 1 : step;
    if(first < second) {
        for(let i = first; i < second + 1; i += step) {
            array.push(i);
        }
    }
    else {
        throw 'First parameter must be less than the second.';
    }

    return array;
}

const sum = range => {
    let sum = 0;
    for(let i = 0; i < range.length; i++) {
        sum += range[i];
    }

    return sum;
}

console.log(sum(range(1,10, 2)));
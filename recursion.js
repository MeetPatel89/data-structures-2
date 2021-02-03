const sum = (arr) => {
    if (!arr.length) {
        return 0
    }

    return arr[0] + sum(arr.slice(1))
}

const findNthFib = (n) => {
    console.log(`Recursive function called on ${n}`);
    if (n < 1 || !Number.isInteger(n)) {
        return 'n should be a positive integer'
    }
    if (n === 1) {
        return 0
    }
    if (n === 2) {
        return 1
    }
    
    return findNthFib(n - 1) + findNthFib(n -2)
}

const givenObj = {'random': 'value', 'anotherrandom': 'anothervalue'};
if ('value' in givenObj) {
    console.log(true)
} else {
    console.log(false)
}
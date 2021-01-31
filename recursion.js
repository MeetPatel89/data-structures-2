const sumOf = (list) => {
    if (list.length === 1) {
        return list[0];
    }
    sumOf(list.slice(1))
}

const givenArr = [3, 9, 11, 10, 7];

console.log(sumOf(givenArr));
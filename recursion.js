const sumOf = (list) => {
  if (list.length === 1) {
    return list[0];
  }
  return list[0] + sumOf(list.slice(1));
};

const givenArr = [3, 9, 11, 10, 7];

console.log(sumOf(givenArr));

const sheepCounter = (numSheep) => {
  if (numSheep === 0) {
    return 'All sheep jumped over the fence';
  }
  return (
    `${numSheep}: Another sheep jumps over the fence` +
    '\n' +
    sheepCounter(numSheep - 1)
  );
};

console.log(sheepCounter(3));

const powerCal = (base, exp) => {
  if (exp === 0 || exp === 1) {
    return base;
  }
  return base * powerCal(base, exp - 1);
};

console.log(powerCal(10, 3));

const revStr = (str) => {
  if (str.length === 1) {
    return str
  }
  return str[str.length - 1] + revStr(str.slice(0, str.length - 1))
}

console.log(revStr('rant'))

const givenArr = [2, 4, 6, 7, 9];

const nestedFunc = (lst) => {
  let tick = 0
  for (let i = 0; i < lst.length; i++) {
    for (let j = 0; j < lst.length; j++) {
      console.log(lst[i], lst[j])
      tick++
    }
  }
  return {tick}
}
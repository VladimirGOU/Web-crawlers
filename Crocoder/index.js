
const input = [ 1, 2, 3, 4, 5 ];
// const map1 = input.map(x => x * x);
// console.log('Solution 1 ', map1);

let map2 = input.map( num => Math.pow(num, 2));

console.log('Solution 2 ', map2);

Math.pow
Math.pow()


const inputElemets = [1, -4, 12, 0, -3, 29, -150];
const positiveNimbers = inputElemets.filter( inputElemets => inputElemets >= 1 );
console.log('Exercise 2');
console.log('Initial array', inputElemets)
console.log('Positive numbers filtered', positiveNimbers);

const initialValue = 0;
const sumWithInitial = positiveNimbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  
console.log('Sum of every positive element', sumWithInitial);



const inputMedianAndMean = [12, 46, 32, 64];
const outputSum = inputMedianAndMean.reduce((accumulator, currentValue) => accumulator + currentValue,
initialValue);
console.log(outputSum);


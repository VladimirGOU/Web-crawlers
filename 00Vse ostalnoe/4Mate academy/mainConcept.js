/**New comment */
// also comment

let age = 25;
const greeting = 'Hello my code';
    age = 15;

console.log ('Im creating my own programm')
console.log ('My age is', age, greeting)
console.log (greeting, ' - this is just a string of VARIABLE')


console.log('')
console.log('first summ with const')
let applee = 4;
let pears = 3;
let fruits = applee + pears;


console.log('apples in the pocket', applee)
console.log('pears in the pocket', pears)
console.log('summ of units =', fruits)


console.log('')

// Data types
const brand = 'Toyota'; // data type string
const price = 22500; // data type number 
const isSedan = true; // data type boolean in (if) conctruction and in cikles
const wings =  undefined; // data type undefind
const owner = null; // data type null

console.log('The type of data string - ', typeof brand);
console.log('The type of data string - ', typeof prise);
console.log('The type of data string - ', typeof wings);

const a = 15;
const b = 2;
const addition = a + b;
const subtraction = a - b;
const division = a / b;
const multiplication = a * b;

const exp = a ** b;
const mod = a % b;

console.log(exp, 'vozved v stepen', mod, 'return of division')

const expression = 20 * ((7 + 8 - 11) / 4);

console.log(expression);


const str1 = 'java';
const str2 = 'script';

let str = `${str1}, ${str2}`;

console.log(str);


const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(materials => materials.length));

for (let myAgeL =0; myAgeL <= 40; myAgeL +=3) {
    console.log(`I am ${myAgeL}`);
}

for (let myAgeM = 40; myAgeM > 0; myAgeM -=5) {
    console.log(`I am ${myAgeM}`);
}

/**const n = 15;
let sum = 0;

//debugger;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(sum); */

//const numberOfGuests = 1;

/**
function getDrinks(numberOfGuests) {
    
    const n =  numberOfGuests;
    let sum = 0;
    for(let i = 1; i <= n; i ++){
      sum += i
    }
    return sum;
  } */

  let numberOfGuest = 10

  function getDrinks(numberOfguest) {
    let countOfDrink = 0;
    for(let i = 1; i <= numberOfGuest; i ++ ) {
        countOfDrink += i;
    }
    return countOfDrink;
  }
    console.log(countOfDrink)


  let numberOfGuest1 = 10;
  let step = 3;

  function getDrinksWithStep(numberOfGuest1, step) {
    let allDrinks = 1;
    for(i = 1; i <= numberOfGuest1; i = step) {
        allDrinks += i
    }
    return allDrinks;
  }
  

//LOOPS They repeat an action a number of times.
// for, while, do...while, for...in, for...of

//for(initialExpression, condition, incrementExpression) {
//    statement
//} 
// This loop will run as long as this condition evaluates to true
//The first statement is what we call
//initialExpression. And here we declare an initialized
//variable. So, we use let to declare a
//variable like i and set it to 0. Now i is short for
//index and is a common convention to use in for loops. This is
//what we call the loop variable. So we initialize it to 0,

for (let i = 0; i < 10; i++ ){
    console.log('Hello Vova', i);
}

for (let i1 = 1; i1 <= 5; i1++){
    console.log('Loop stars from 1 not from 0', i1); 
}

for (let iDiv = 1; iDiv <=5; iDiv++){
    if (iDiv % 2 !== 0)
    console.log('Remaine of Division', iDiv);
}

for (let iDivM = 5; iDivM >=1; iDivM--){
    if (iDivM % 2 !== 0)
    console.log('Remaine of Division Backwars', iDivM);
}

// DO WHILE LOOP do-while loops are always executed at least once. Even if this condition evaluates to false

for (let start = 0; start<=5 ; start++) {
    if ( start % 2 !== 0) console.log('Do while', start)
}

let whileLoop = 9
while( whileLoop <= 5) {
    if ( whileLoop % 2 !==0) console.log('While loop', whileLoop);
    whileLoop++;
}

//INFINITE LOOP


//FOR LOOPS
//WHILE LOOPS
//DO WHILE LOOPS

function maxOfTwoNUmbers(a, b){
   if (a > b) {
    return a
   } else return b;}
let maxOfTwo = maxOfTwoNUmbers(1,2)
console.log(maxOfTwo)


const lar = largrer(10, 12)
function largrer (number1, number2) {
//    let sum = number1 > number2 ? number1 : number2;
//    return sum;
      return number1 > number2 ? number1 : number2
};
console.log('largest =',lar)

//Types of function exrpession
//Function Declaration
function inc(a) {
return a + 1;
}
//Function expression
const suma = function(a, b) {
    return a + b
};
//Lambda expression or Array function
const sum = (a, b) => (a + b);
const maxOf = (a, b) => (a > b ? a : b); 
console.log(maxOf(18,17));

const avg = (x, y) => {
    let s = suma(x, y);
    return s/2;
}
console.log(avg(10, 3))

const cicties = ['Odessa', 'Kyiv', 'Malga', 'Madrid', 'London', 'New York'];
const f = s => s.length;
function f2(s) {
    return 'index' + s.length
}
console.log(cicties)
console.log( cicties.map(f2))

function f1 () {
    const cicties = ['Odessa', 'Kyiv'];
    const f = s => s.toUpperCase();
    console.dir({cicties})
    console.dir(cicties.map(f))

    {
        const f = s => s.toLowerCase();
        console.dir({cicties});
        console.dir(cicties.map(f));
    }

    {
        const cicties = ['Malga', 'Madrid', 'London'];
        console.dir({cicties});
        console.dir(cicties.map(f));
    }
}

console.log(isLandscape(800,900))
function isLandscape(width, height) {
    // return (width > height) ? true: false;
    return (width > height)

}

const output = fizzBuzz(false)
console.log(output)

function fizzBuzz(input){
    if ( typeof input !== 'number') {
        return NaN
    } 

    if ( input %3 === 0 && input %5 ===0 ) {
        return "FizzBuzz"
    }

    if ( input %3 === 0) {
        return 'Fizz'
    }

    if (input %5 === 0 ) {
        return 'Buzz'
    }

    return input
}



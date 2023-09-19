const { type } = require("express/lib/response");

const  title = 'New big stringN';

let count = 0;

for(let i = 0; i < title.length; i++){
    if (title[i] === 'N') {
        count++
    }
}
console.log('count with for loop', count)

let count1 =  0;
for(const char of title){
    if(char === 'N') {
        count1++
    }
}
console.log('count with char of method', count1)

for (let i = 10; i >=5; i--) {
    if ( i === 8){
       // console.log(i)
    }
}

for ( i = 5; i <= 10; i++) {
    //console.log(i)
}

for ( i = 10; i >=5; i--){
    //console.log(i)
}

for ( i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
       // console.log(i)
    }
}

for ( i = 0; i <=20; i++) {
    if ( i % 2 === 1){
    //console.log(i)
    }
}


let inputNum = 10;
let sumOfNum = 0;

for ( i = 1; i <= inputNum; i++) {
    sumOfNum += i
}

console.log(sumOfNum)

function isPrimeNumber(n){
    if (n <= 1) {
        return false;
    }

    let isPrime = true;

    for (let i = 2; i < n; i++){
        if ( n % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

let inputNumber = 5;

if (isPrimeNumber(inputNumber)) {
    console.log(`the number ${inputNumber} - is prime`)
} else {
    console.log(`the number ${inputNumber} - is not prime`)
}

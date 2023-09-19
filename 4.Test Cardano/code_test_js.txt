//1.Create a function that accepts an array of numbers and returns a reversed array (e.g. [1,2,3] would be [3,2,1]

function reversedArray(arr) {
    return arr.reverse();
}
const originalArray = [1, 2, 3];
console.log("EX1 Function using method .reverse", reversedArray(originalArray))


function reverseArr(input) {
    let returnRevesedArray = new Array;
    for(let i = input.length-1; i >= 0; i--) {
        returnRevesedArray.push(input[i]);
    }
    return returnRevesedArray;
}

let inputArray = [4,5,6]

console.log("EX1.1 Function using FOR LOOP method", reverseArr(inputArray))







//2.Write a function that transforms an array of strings to an upper-case array of strings
function uppercaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}

const lowercaseArray = ["Apple", "bananA", "cheRry"];
console.log("EX.2 Function to upperCaseArray", uppercaseArray(lowercaseArray));









//3.Given a sentence create a function that returns the number of unique words (e.g. 'the cat jumped over the mat' would be [{the: 2}, {cat: 1}…]
function countUniqueWords(sentence) {
    const words = sentence.toLowerCase().split(' ');
    const wordCount = {};

    for (const word of words) {
        if (wordCount.hasOwnProperty(word)) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    const uniqueWords = [];
    for (const word in wordCount) {
        uniqueWords.push({ [word]: wordCount[word] });
    }

    return uniqueWords;
}
const sentence = 'the cat jumped over the mat';
console.log("EX.3 Function shows unique words from sentence", countUniqueWords(sentence));







//4.Write a function 'composeu'; that takes two unary functions and returns a unary function that calls them both. A unary function has a single argument and a single return value (e.g. f(d) { return d + 1}
function composeu(fn1, fn2) {
    return function(x) {
        return fn2(fn1(x));
    };
}

function addOne(x) {
    return x + 1;
}

function double(x) {
    return x * 2;
}

const composedFunction = composeu(addOne, double);
console.log("EX.4 Function unary", composedFunction(4));





//5.Write a function that reads from a file and prints the contents to the console'
const fs = require('fs');

function readFileAndPrint(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            console.log('EX.5 Function that reads from a file and prints the contents to the consol:');
            console.log(data);
        }
    });
}

const filePath = './example.txt'; // Replace this with the actual path to your file
readFileAndPrint(filePath);

//6.Give an example of how a function would handle an invalid argument

function calculateRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Both width and height must be numeric values.');
    }

    if (width <= 0 || height <= 0) {
        throw new Error('Both width and height must be positive values.');
    }

    return width * height;
}

try {
    const area = calculateRectangleArea(5, 'string');
    console.log('EX.6 Rectangle area:', area);
} catch (error) {
    console.error('EX.6 An error occurred:', error.message);
}



//Puzzle

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkForSnap(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            console.log('Snap');
        } else {
            console.log('No equal found', numbers[i]);
        }
    }
}

rl.question('Enter a sequence of numbers separated by spaces: ', input => {
    const numbers = input.split(' ').map(Number);
    checkForSnap(numbers);
    rl.close();
});



//SQL
//Create a query to return the unique rows in a table
//SELECT DISTINCT * FROM table_name;


//Write a command to insert values into a table
// INSERT INTO table_name (City, ...)
// VALUES (Malaga, ...);


//Create a query that joins two tables together. Note, all rows from the first table must be in the result-set (e.g. given customer and order tables, return all customers and any orders for each customer)
// SELECT customers, orders 
// FROM customers
// LEFT JOIN orders ON customers.customer_id = orders.customer_id;


const fs = require('fs');

function readFileAndPrint(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        } else {
            //console.log('File contents:');
            //console.log(data);
        }
    });
}

const filePath = './example.txt';
readFileAndPrint(filePath);



let arr =  [1, 2, 3]

let newArr = arr.map(number => number)

let newObj = []

let result =  newObj.push[newArr]
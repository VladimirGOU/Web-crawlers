//Задача: напишіть функцію, яка приймає рядок і повертає той же рядок, але кожне слово перевернуто задом наперед. Наприклад, для рядка "hello world" функція повинна повернути "olleh dlrow".



// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");

// console.log(reverseString("hello word"));



const strInput = "hello world"
// Option 1
function reversedString(inputParameter){
    const splitArr = inputParameter.split("")
    const reverseArr = splitArr.reverse()
    const joinArr = reverseArr.join("")
    return joinArr
}
console.log(reversedString(strInput))
// Option 2
function reverseStr(inputParameter){
    const reversedArr = inputParameter.split("").reverse().join("")
    return reversedArr
}
console.log(reverseStr("hello world"))
// Option 3
function revStr(inputParameter){
    return inputParameter.split("").reverse().join("")
}
console.log(revStr("Mama mia"))
// Option 4 

function reverseString1(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
}
console.log(reverseString1('rotciV obisapS'));


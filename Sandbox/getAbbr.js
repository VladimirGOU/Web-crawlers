// let str = 'United Nations Educational, Scientific and Cultural Organization';
// let arrOfWords = [];
// let word = '';

// for(let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//         arrOfWords.push(word);
//         word = ''
//     } else { word += str[i]}
// } 
// arrOfWords.push(word)
// console.log('Array of words', arrOfWords); // ["United", "Nations", "Educational,", "Scientific", "and", "Cultural", "Organization"]

// const arrFirstLetter = arrOfWords.map(firstLetter => firstLetter[0]);
// console.log('Array of first letters', arrFirstLetter) // ["U", "N", "E", "S", "a", "C", "O"]

// const arrOnlyBigLetters = [];
// for (let i = 0; i < arrFirstLetter.length; i++) {
//     if (arrFirstLetter[i] !== 'a') {
//         arrOnlyBigLetters.push(arrFirstLetter[i])
//     }
// }
// console.log('Only big letters', arrOnlyBigLetters) // ["U", "N", "E", "S", "C", "O"]

// const abbrEntire = arrOnlyBigLetters.join('.');
// console.log('Actual result as expected', abbrEntire) // U.N.E.S.C.O

// for (let i = 0; i <= 5; i++){
//     console.log(i)
// }

// for (let char of 'Hello') {
//     console.log(char);
// }

// let symbolCollection = ['@', '#', '$', '%'];
//   for (let symbolVariable of symbolCollection) {
//     console.log(symbolVariable);
//   }
  
//   for (let element of [1, 2, 3, 4, 5]) {
//     console.log(element);
//   }

///////////////////////////////////////////////////////

// for ( let i = 10; i >= 1; i--){
//     // console.log(i)
// }
// let result = ""
// for ( let i = 0; i <= 25; i++ ){
//     result += i + " "
// }
// console.log(result)
 ///////////////////*********************************
// let resultFromDev = ""
// for ( let i = 0; i <=20; i++){
//     if ( i % 2 === 0) {
//         resultFromDev += i + " "
//     }
// }
// console.log(resultFromDev)

///////////////////////////////////////////////////////
// let restOfTree = 0;
// let restOfFive = 0;
// for ( let i = 0; i <=1000; i++){
//     if( i%3 === 0) {
//         restOfTree += i
//     } 
//     if ( i%5 ===0) {
//         restOfFive += i
//     }
// }
// let sum = restOfFive + restOfTree
// console.log(sum)

// let i = 0;
// while(i <= 5) {
//     i++
//     console.log(i)
// }

///////////////////////////////////////////

let str = 'United Nations Educational, Scientific and Cultural Organization';
let word = '';
let i = 0;
let arrOfWords = [];

while ( i < str.length) {
    if( str[i] === ' ') {
        arrOfWords.push(word);
        word = '';
    } else {
        word += str[i]
    } i++;
}
arrOfWords.push(word);
console.log('Array of words', arrOfWords); // ["United", "Nations", "Educational,", "Scientific", "and", "Cultural", "Organization"]

const arrNoAnd = arrOfWords.filter( word => word[0]  !== 'a')
console.log('Array of first letters', arrNoAnd) // ["United", "Nations", "Educational", "Scientific", "Cultural", "Organization"]

const arrOnlyBigLetters = arrNoAnd.map( firstLetter => firstLetter[0]) ; 
console.log('Only big letters', arrOnlyBigLetters) // ["U", "N", "E", "S", "C", "O"]

const abbrEntire = arrOnlyBigLetters.join('.');
console.log('Actual result as expected in to string:   ', abbrEntire) // U.N.E.S.C.O


// let strQ = "Hello, world!";
// let i = 0;
// let wordQ = ""
// while (i < strQ.length) {
//   console.log(strQ[i]);
//   wordQ +=i
//   i++;
// }
// console.log(wordQ)


/////////////////////


// let strQ = "Hello, world!";
// // let i = 0;
// let wordQ = "";
// while (i < strQ.length) {
//   console.log(strQ[i]);
//   wordQ += strQ[i];
//   i++;
// }
// console.log(wordQ); // выведет "Hello, world!"

///////////////////////////////////////////
//Знайти найбільший елемент в масиві чисел.
///////////////////////////////////////////

let maxElement = [7, 2, 10, 1, 5, 9];
console.log(Math.max(...maxElement))


///////////////////////////////////////////
//Ось завдання: напишіть функцію, яка приймає масив чисел і повертає новий масив, що містить всі числа з початкового масиву, окрім найбільшого та найменшого чисел.
///////////////////////////////////////////


let nums = [1, 2, 3, 4, 5, 6, 7];

function filtederNumbers(enterArr){
    let maxNumber = Math.max(...enterArr);
    let minNumber = Math.min(...enterArr);
    
    const arrNoMinNoMax = enterArr.filter( numsFiltered => numsFiltered !== minNumber && numsFiltered !== maxNumber)
    
    console.log(maxNumber);
    console.log(minNumber);

    return arrNoMinNoMax
}
console.log(filtederNumbers(nums));

////////////////////////////////////////////
//Напишіть функцію, яка перевірятиме, чи є задане слово паліндромом. Паліндром - це слово, яке читається однаково зліва направо та справа наліво.
////////////////////////////////////////////

// let palindrom = 'civic'

// function reverseString(str) {
//     const originWord = str

//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     // return joinArray
    
//     if ( originWord === joinArray) {
//         result = "is palindrom"
//     } else {
//         result = "is NOT palindrom"
//     }
//     return result; // "olleh"
// }
 
// console.log(reverseString(palindrom))


let inputWord = 'civic'

function isPalindrom(str) {
    const originWord = str

    var splitWordStringToArray = str.split("");

    var reverseArray = splitWordStringToArray.reverse();

    var joinArrayToCreateWord = reverseArray.join("");

    
    if ( originWord === joinArrayToCreateWord) {
        result = "is palindrom"
    } else {
        result = "is NOT palindrom"
    }
    return result;
}
 
console.log(isPalindrom(inputWord))


/////////////////////////////////////////////
//Напишіть функцію, яка приймає рядок і повертає кількість голосних літер (a, e, i, o, u) у рядку. Наприклад, для рядка "hello world" функція повинна повернути 3, оскільки в рядку є 3 голосні літери (о, о, е).
/////////////////////////////////////////////

const vowels = "hello world"
function countVowels (str){
    const countedVowels = str.match(/[aeiou]/gi)
    return countedVowels ? countedVowels.length : 0
};
console.log(countVowels(vowels))


function sumEvenNumbers(numbers) {
    // Your code here
    let sum = 0
    numbers.forEach(num => {
        if (num % 2 === 0) { 
            sum = sum + num
        }
    });
    return sum
  }
  
  // Example usage
  console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Should log 12
  console.log(sumEvenNumbers([7, 8, 9, 10])); // Should log 18
  console.log(sumEvenNumbers([])); // Should log 0


//Exercise 2 


function reverseString(str) {
    const reverse = str.split('').reverse('').join('')
    return reverse
  }

  
  // Example usage
  console.log(reverseString("hello")); // Should log "olleh"
  console.log(reverseString("JavaScript")); // Should log "tpircSavaJ"
  console.log(reverseString("")); // Should log ""
  
//   const str = "Hello"
//   const reverse = str.split('').reverse().join('')
//   console.log(reverse)

// function findLongestWord(arr){
//   var str = arr
//   let longestWord = 0

//   for(var i =0; i < str.length; i++){
//   }
// }

// console.log(findLongestWord(["cat", "dog", "elephant"])); // повинно повернути 8
// console.log(findLongestWord(["apple", "banana", "pear"])); // повинно повернути 6
// console.log(findLongestWord(["programming", "is", "awesome"])); // повинно повернути 11

function findLongestWord(arr) {
  var longestWord = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > longestWord){
	longestWord = arr[i].length;
     }
  }
  return longestWord;
}
console.log(findLongestWord(["cat", "dog", "elephant"])); // повинно повернути 8
console.log(findLongestWord(["apple", "banana", "pear"])); // повинно повернути 6
console.log(findLongestWord(["programming", "is", "awesome"])); // повинно повернути 11




//Day 3 exercise 3
//Завдання: Напишіть функцію, яка перетворює рядок на абревіатуру.
//Функція повинна приймати рядок з двох або більше слів,
//а повертати абревіатуру, яка складається з перших літер кожного слова, розділених крапкою.

function abbreviate(str){
return str.split(' ').reduce((prevVal, curWord) => prevVal + (curWord ? curWord[0]+'.' : ''), '')
}
console.log(abbreviate("Central Intelligence Agency")); // повинно повернути "C.I.A"
console.log(abbreviate("United Nations Educational, Scientific and Cultural Organization")); // повинно повернути "U.N.E.S.C.O"

// function abbreviateSecond(str) {
//   let noAnd = str.replace(/dialogTitleCloseSpanOver/g, '')
//   console.log('No And',noAnd)
//   let words = noAnd.split(" ");
//   let abbreviation = words.map(word => word[0]).join(".")//.replace(/a/, "", /S\./, "S");
//   return abbreviation;
// }
// console.log(abbreviateSecond("Central Intelligence Agency")); // повинно повернути "C.I.A"
// console.log(abbreviateSecond("United Nations Educational, Scientific and Cultural Organization")); // повинно повернути "U.N.E.S.C.O"

// function abbreviate(str) {
//   return str.split(/\W+/).reduce((prevVal, curWord, index) => {
//     if (curWord.length > 1) {
//       prevVal += (index ? ' ' : '') + curWord[0] + '.';
//     } else if (curWord.length === 1) {
//       prevVal += curWord + ' ';
//     }
//     return prevVal;
//   }, '');
// }

// console.log(abbreviate("Central Intelligence Agency")); // повинно повернути "C.I.A"
// console.log(abbreviate("United Nations Educational, Scientific and Cultural Organization")); // повинно повернути "U.N.E.S.C.O"

// function abbreviateT(str) {
//   return str.split('').reduce((prevVal, curChar, index) => {
//     if (curChar === ' ' || curChar === '.') {
//       return prevVal + curChar;
//     } else if (str[index - 1] === ' ' || str[index - 1] === '.') {
//       return prevVal + curChar.toUpperCase() + '.';
//     } else {
//       return prevVal;
//     }
//   }, '');
// }

// console.log(abbreviateT('U.N.E.S.a.C.O.')); // повинно повернути "U.N.E.S.C.O."


// function abbreviate5(str) {
//   // Розділяємо рядок на слова, використовуючи кому та пробіли як роздільники
//   const words = str.split(/[ ,]+/);
  
//   // Беремо першу літеру кожного слова та перетворюємо її на велику літеру
//   const abbreviation = words.map(word => word.charAt(0).toUpperCase()).join('.');
  
//   return abbreviation;
// }

// console.log(abbreviate("Central Intelligence Agency")); // повинно повернути "C.I.A"
// console.log(abbreviate("United Nations Educational, Scientific and Cultural Organization")); // повинно повернути "U.N.E.S.C.O"

// function abbreviate(str) {
//   // Розділяємо рядок на слова, використовуючи кому, пробіли, дефіси та міжслівні пробіли як роздільники
//   const words = str.split(/[ ,\-]+|\b/);
  
//   // Беремо першу літеру кожного слова та перетворюємо її на велику літеру
//   const abbreviation = words.map(word => word.charAt(0).toUpperCase()).join('.');
  
//   return abbreviation;
// }


// console.log(abbreviate("Central Intelligence Agency")); // повинно повернути "C.I.A"
// console.log(abbreviate("United Nations Educational, Scientific and Cultural Organization")); // повинно повернути "U.N.E.S.C.O"

// function abbreviate(str) {
//   const words = str.match(/\b\w/g);
//   return words.join('.').toUpperCase();
// }

// console.log(abbreviate("Central Intelligence Agency")); // повинно повернути "C.I.A"
// console.log(abbreviate("United Nations Educational, Scientific and Cultural Organization")); // повинно повернути "U.N.E.S.C.O"

// function abbreviate(str) {
//   // розділяємо рядок на слова, використовуючи пробіл, кому і дефіс як роздільники
//   const words = str.split(/[ ,\-]+/);

//   // Беремо першу літеру кожного слова та перетворюємо її на велику літеру
//   const abbreviation = words.map(word => word.charAt(0).toUpperCase()).join('');

//   return abbreviation;
// }

// console.log(abbreviate("Central Intelligence Agency")); // повинно повернути "CIA"
// console.log(abbreviate("United Nations Educational, Scientific and Cultural Organization")); // повинно повернути "UNESCO"

// function abbreviateF(str) {
//   const excludedWords = ["and"];
//   const words = str.toUpperCase().split(/\W+/);
//   return words.reduce((prev, curr) => {
//     if (!excludedWords.includes(curr)) {
//       return prev + curr[0];
//     }
//     return prev;
//   }, "");
// }



// console.log(abbreviateF("Central Intelligence Agency")); // повинно повернути "CIA"
// console.log(abbreviateF("United Nations Educational, Scientific and Cultural Organization")); // повинно повернути "UNESCO"



function arrToStr(str){
let arr = [];
arr.push(str);
return arr
}
console.log((arrToStr('Malaga, Dortmund, Kyiv')))
let splitArr = arrToStr('Malaga, Dortmund, Kyiv')
console.log(splitArr)

let newString = 'Malaga, Dortmund, Kyiv';
let splitedString = newString.split('')
console.log(splitedString)


let str = 'United Nations Educational, Scientific and Cultural Organization';
let arrOfWords = [];
let word = '';

for(let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        arrOfWords.push(word);
        word = ''
    } else { word += str[i]}
} 
arrOfWords.push(word)
console.log('Array of words', arrOfWords); // ["United", "Nations", "Educational,", "Scientific", "and", "Cultural", "Organization"]

const arrFirstLetter = arrOfWords.map(firstLetter => firstLetter[0]);
console.log('Array of first letters', arrFirstLetter) // ["U", "N", "E", "S", "a", "C", "O"]

const arrOnlyBigLetters = [];
for (let i = 0; i < arrFirstLetter.length; i++) {
    if (arrFirstLetter[i] !== 'a') {
        arrOnlyBigLetters.push(arrFirstLetter[i])
    }
}
console.log('Only big letters', arrOnlyBigLetters) // ["U", "N", "E", "S", "C", "O"]

const abbrEntire = arrOnlyBigLetters.join('.');
console.log('Actual result as expected', abbrEntire) // U.N.E.S.C.O
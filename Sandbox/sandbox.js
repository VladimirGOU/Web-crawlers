// const arr = [
//     [1, 2], [3, 4], [5, 6]
//   ];
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }


//   function findGreaterOrEqual(a, b) {
//     return (a === b) ? "a and b are equal" 
//       : (a > b) ? "a is greater" 
//       : "b is greater";
//   }

//   console.log(findGreaterOrEqual(192, 54))


//   function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(22));

  // function countdown(n){
  //   if ( n < 1 ) {
  //     return []
  //   } else {
  //     const countArray = countdown(n - 1);
  //     countArray.reverse();
  //     return countArray
  //   }
  // }

//   function countdown(n){
//     return n < 1 ? [] : [n].concat(countdown(n - 1));
//  }
//   console.log(countdown(5))

//   let number = 346 % 2; 
// console.log(number)

// let remainder = 16 % 7; // остаток от деления  

// console.log(remainder); // 2 — вычитаем 7 пока результат не станет меньше 7 


// Проверяем остаток от деления в разных случаях
// var numb = 7;
// if (number % 2 === 0) {
//   console.log("Число " + number + " четное.");
// } else {
//   console.log("Число " + number + " нечетное.");
// }

// let num = 7;
// if(num % 2 === 0) {
//   console.log("Number " + num + " even")
// } else {
//   console.log("Number " + num + " odd")
// }

// let num = 7;
// if( num % 2 === 0) {
//   console.log("Number " + num + " is even")
// } else {
//   console.log("Number " + num + " is odd")
// }

// let num = 7;

// (num % 2 === 0) ? console.log('Number' + num + 'even') : console.log('Number' + num + 'odd')

// let numb = 10;
// const result = num % 2 === 0 ? 'even' : 'odd'
// console.log('The number ' + numb + ' is ' + result)


//var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var chunkSize = 2;

// for (var i = 0; i < arr.length; i += chunkSize) {
//   var chunk = arr.slice(i, i + chunkSize);
//   console.log("Часть массива:", chunk);
// }

// let num = 356;
// if(num % 2 === 0 ) {
//   console.log('the number ' + num + ' is even')
// } else {
//   console.log('the number ' + num + ' is odd')
// }

// let numbr = 4
// let result = numbr % 3 === 0 ? 'kratnoe 3' : 'ne kratnoe 3'
// console.log(result)

// function checkMultiple(arr){
//   let result = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if(i % 3 === 0){
//       result.push(true)
//     } else {
//       result.push(false)
//     }
//   }
//   return result
// }
// const arr = [1, 3, 6, 9, 12, 15];
// let result = checkMultiple(arr) 
// let arrResult = [[result.map( x => x)]]
// let emptyObj = { 
//   result: arrResult
// }
// console.log(emptyObj)

// const myStr = "I am a \"double quoted\" string inside \"double quotes\"";
// console.log(myStr)

let myNameLength = 0
const myName = "Vovanlkdassa"
myNameLength = myName.length
console.log(myNameLength)
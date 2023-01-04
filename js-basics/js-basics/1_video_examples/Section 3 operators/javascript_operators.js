//Arithmetic operators
let x = 10;
let y = 10;

console.log(x+y); //addition
console.log(x-y); //subtraction
console.log(x*y); //multiplication
console.log(x/y); //division
console.log(x%y); //remeinder of division
console.log(x**y); //exponentiation это корень квадратный где х умножается на у игрек раз минус 1 

//Increment (++)
console.log(++x); //тут код идет по очереди 1 прибавляется к икс и мы сразу видим это в консоли
console.log(x++); //тут код тоже идет по очереди но мы увидим результат в консоле для того чтоб увидеть результат нужно отдельно вызвать х
console.log(x);

//Decrement (--)

console.log(y--);

//Assingmemt operator =
let z = 5;
z = 5 + 1;
z += 100;
console.log('z =', z);

object = {
    name:"Vova",
    age: 40,
    newProperty: z + x,
}
console.log(object) //{ name: 'Vova', age: 40, newProperty: 118 }

//Comparison operators

//Relational
let a = 1;
console.log('a > 0  =', a > 0); //output true 
console.log('a >= 0 =', a >= 1); //output true
console.log('a < 0  =', a < 1); //output false
console.log('a <= 0 =', a <= 1); //output true

//Equality
console.log(a === 1); //true строгое равно
console.log(a !== 1); //false не равно

//Equality operators
//Strict equality (Type + Value);
console.log("1===1 =", 1===1 );
console.log("'1'===1 =", '1'===1 );

//Lose Equality operators (Value);

console.log("1==1 =", 1==1 );
console.log("'1'==1 =", '1'==1 );
console.log("true==1 =", true==1 );
console.log("false==1 =", false==1 );

//Ternary operators
// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 99;
let typeOfCustomer = points > 100 ? 'Gold' : 'Silver';
console.log('This customers status is =', typeOfCustomer);


let surname = 'Klime';
let surnameVerificatin = surname == 'Klim' ? 'OPEN' : 'DENIDED';
console.log('Your access is ', surnameVerificatin);
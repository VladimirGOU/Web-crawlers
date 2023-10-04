// boolean basics
const age0 = 18;
const hasAccess0 = true; // ро умолчанию всегда ture

const age = 17;
const hasAccess = age >= 18; // <, >, <=, >=, ===, !==

const age1 = 18;
const hasAccess1 = age1 === 18;

const age2 = 19;
const hasAccess2 = age2 !==18;
const hasAccess3 = !(age2 < 18 );



//const hasAccess = false;

console.log(hasAccess);
console.log(hasAccess1);
console.log(!hasAccess2); // ! по умолчанию значение тру но если поставить ! то виводит противоположное значение false
console.log(!hasAccess3);

// Logical(оператор) AND 

let cashInPocket = 40;
let age4 = 19;

const price = 40;
const ageLimit = 18;

const hasEnoghtMoney = cashInPocket >= price;
const isAdult = age4 >= ageLimit;

const canBuy = hasEnoghtMoney && isAdult;
if (canBuy) {
    console.log ('Yes, you can buy Alco')}
    else {console.log ('No, you too young for Alco')}


console.log('_________________________', canBuy);


// Logical OR

let myCash = 50;
let hisAge = 9;
let cardAmount = 50;


const priceAlco = 40;
const minAge = 18;

const canPayCash = myCash >= priceAlco;
const canPayWithCard = cardAmount >= priceAlco;

//const willBuy = true;
const adultEnough = hisAge >= minAge;

const willBuyAlco = canPayCash || adultEnough || canPayWithCard;
if (willBuyAlco) {
    console.log ('Yes, you can buy Alco')}
    else {console.log ('No, you too young for Alco')}







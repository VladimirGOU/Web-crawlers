//LOOPS They repeat an action a number of times.
// for, while, do...while, for...in, for...of

//for(initialExpression, condition, incrementExpression) {
//    statement
//} 
// This loop will run as long as this condition evaluates to true
//The first statement is what we call
//initialExpression. And here we declare an initialized
//variable. So, we use let to declare a
//variable like i and set it to 0. Now i is short for
//index and is a common convention to use in for loops. This is
//what we call the loop variable. So we initialize it to 0,

for (let i = 0; i < 10; i++ ){
    console.log('Hello Vova', i);
}

for (let i1 = 1; i1 <= 5; i1++){
    console.log('Loop stars from 1 not from 0', i1); 
}

for (let iDiv = 1; iDiv <=5; iDiv++){
    if (iDiv % 2 !== 0)
    console.log('Remaine of Division', iDiv);
}

for (let iDivM = 5; iDivM >=1; iDivM--){
    if (iDivM % 2 !== 0)
    console.log('Remaine of Division Backwars', iDivM);
}


//object A person has name, age, address and so on. These are the properties of a person.
let name = 'Vova';
let age = 40;
let person = {
name: 'Vova',
age: 40
}; // So the syntax we have here use curly braces {} is what we call an object literal

//Dot notation
person.name = 'Dima';

//Bracket notation
person['name'] = 'Sveta';

let selection = 'name';
person[selection] = 'Kot'

console.log(person);
console.log(person.name);

//so we need to access the name property

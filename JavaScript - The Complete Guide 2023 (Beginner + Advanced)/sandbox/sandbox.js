console.log('sanbox')

const originalArray = [{price: 10.99, id: 1}, {price: 5.99, id: 2}, {price: 29.99, id: 3}];
console.log(originalArray);

const transformedArray = originalArray.map(obj => obj.price);
console.log(transformedArray);

const nameData = ['Vova', 'Klim','Mr', 40];
// let firstName = nameData[0];
// let lastName = nameData[1];
const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName,lastName, otherInformation);

const ids = new Set([1, 2, 3, 555]);
console.log(ids.has(555));






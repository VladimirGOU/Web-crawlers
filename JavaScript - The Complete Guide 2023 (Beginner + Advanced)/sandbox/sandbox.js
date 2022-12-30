

// const originalArray = [{price: 10.99, id: 1}, {price: 5.99, id: 2}, {price: 29.99, id: 3}];
// console.log(originalArray);

// const transformedArray = originalArray.map(obj => obj.price);
// console.log(transformedArray);

// const nameData = ['Vova', 'Klim','Mr', 40];
// // let firstName = nameData[0];
// // let lastName = nameData[1];
// const [firstName, lastName, ...otherInformation] = nameData;
// console.log(firstName,lastName, otherInformation);

// const ids = new Set([1, 2, 3, 555]);
// console.log(ids.has(555));




const friendName = ["Vova", "Vasyl", "Tomasz", "Jesus", "Celia", "Cam", "Jazz", "Dani"];
friendName.sort();
const map1 = friendName.map(friendMaping);

function friendMaping(element, index){

const friend = {
    name: element,
    orderId: index + 1

}

return friend

}


console.log(map1);


const age = 18;
const hasAccess = age !== 18;
console.log(!hasAccess)
data = [
	[
		"Noodle Meals"
	],
	[
		"Noodle Meals"
	],
	[
		"Rice Crackers"
	],
	[
		"Rice Crackers"
	],
	[
		"Meat Snacks"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	],
	[
		"Barbeque Sauces"
	]
]

maping = data.map( x => x[0])

uniqueArray = [...new Set(maping)]

console.log(uniqueArray)

// var formattedOutput = JSON.stringify(uniqueArray, null, 2)
//   .replace(/(^\[|\]$)/g, '')
//   .replace(/,/g, ', ')
//   .trim();

// console.log('[');
// console.log(formattedOutput);
// console.log(']');

var formattedOutput = JSON.stringify(uniqueArray, null, 2)
.replace(/\[\n\s+/g, '[\n  ')
.replace(/\n\s+\]/g, '\n]')
.replace(/",/g, '" ')
.replace(/"\n\s+"/g, '",\n  "');

console.log(formattedOutput);

// var formattedOutput = JSON.stringify(uniqueArray, null, 2)
// .replace(/\[\n\s+/g, '[\n  ')
// .replace(/\n\s+\]/g, '\n]')
// .replace(/",/g, '", ')
// .replace(/"\n\s+"/g, '",\n  "');

// console.log(formattedOutput);
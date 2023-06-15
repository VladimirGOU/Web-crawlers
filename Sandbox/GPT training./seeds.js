const categories = [
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
const result = categories.map(sublist => sublist[0]).join(", ");
//const uniqueStr = [...new Set(result)].join(" ")
//console.log(JSON.stringify(result, null, 2))
console.log('MAP\n=====\n', result)

// let arr = [result]
// console.log(arr)

const outputCat = JSON.stringify(result, null, 2)
console.log("\nSTINGIFY\n=====\n", outputCat)

const outputCat1 = outputCat[0].split(', ')
console.log('\nSPLIT\n=====\n', outputCat1)



  var arr5 = ['a', 'b', 'c', 'g'];
  var output = JSON.stringify(arr5, null, 2);
  console.log(output);
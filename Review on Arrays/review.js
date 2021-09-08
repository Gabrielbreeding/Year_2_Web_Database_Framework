const items = [
	{name: 'baseball',      price: 15.99},
	{name: 'basketball',    price: 17.99},
	{name: 'football',      price: 12.99},
	{name: 'golf bag',      price: 88.99},
	{name: 'driver',        price: 199.99},
	{name: 'soccer ball',   price: 29.99},
	{name: 'hockey puck',   price: 9.99},
	{name: 'hockey mask',	price: 109.99}
];

//	Array filter example #1
const cheapItems = items.filter((item) => {
	return item.price < 50;
});

//console.log(cheapItems);

//	Array filter example #2
const expensiveItems = items.filter((item) => {
	return item.price >= 50;
});

//console.log(expensiveItems);


//	Original Array (not changed)
//console.log(items);

//*******************************************

//	Array map example #1
const itemNames = items.map((item) => {
	return item.name;
});

console.log(itemNames);

//	Array map example #2
const itemPrices = items.map((item) => {
	return item.price;
});

//console.log(itemPrices);

//*******************************************

//	Array find example #1 (there)
const itemfound1 = items.find((item) => {
	return item.name === "basketball";
});

console.log(itemfound1);

//	Array find example #2 (not there)
const itemfound2 = items.find((item) => {
	return item.name === "golf balls";
});

//console.log(itemfound2);

//*******************************************

//	forEach example #1
items.forEach((item) => {
//	console.log(item.name);
});


//	forEach example #2
items.forEach((item) => {
//	console.log(`Item Name: ${item.name}\t Item Price: $${item.price}`);
});

//	vs. a standard for loop with:
for (let i = 0; i < items.length; ++i) {
//	console.log(`Item Name: ${items[i].name}\t Item Price: $${items[i].price}`);
}

//*******************************************

//	Array some method example #1
const hasExpensiveItems = items.some((item) => {
	return item.price > 100;
});

//console.log(hasExpensiveItems);

//	Array some method example #2
const hasVeryExpensiveItems = items.some((item) => {
	return item.price > 1000;
});

//console.log(hasVeryExpensiveItems);

//*******************************************

//	Array every method example #1
const allExpensiveItems = items.every((item) => {
	return item.price < 100;
});

//console.log(allExpensiveItems);

//	Array every method example #2
const hasRelativelyInexpensiveItems = items.every((item) => {
	return item.price < 1000;
});

console.log(hasRelativelyInexpensiveItems);

//*******************************************

//	Array reduce method (without reduce)
let totalPrice = 0;

for (let i = 0; i < items.length; ++i) {
	totalPrice += items[i].price;
}

//console.log(`The total price is: $${totalPrice.toFixed(2)}`);

//	Array reduce method (with reduce)
const total = items.reduce((currentTotal, item) => {
	return currentTotal += item.price;
}, 0);

//console.log(`The total is: $${total.toFixed(2)}`);

//*******************************************

//	Array map example #1
const itemNames = items.map((item) => {
	return item.name;
});

//console.log(itemNames);


//	Array map example #2
const itemPrices = items.map((item) => {
	return item.price;
});

//console.log(itemPrices);

//*******************************************

//	Example set #2

//	Instructors array
const instructors = [
	{name: "Charles Corrigan",	department: "Information Technology", 		start: 1985, end: 2028},
	{name: "Jeff Scott", 	  	department: "Application Web Development", 	start: 2016,  end: 2026},
	{name: "Paul Knott", 	   	department: "Information Technology", 		start: 2018, end: 2020},
	{name: "Chad Groharing", 	department: "Information Technology", 		start: 2019, end: 2040},
	{name: "Brock Parsons", 	department: "Information Technology", 		start: 2018, end: 2038},
	{name: "Evan Gudmestad", 	department: "Application Web Development", 	start: 2011, end: 2038},
	{name: "Paul Smith", 		department: "Application Web Development", 	start: 2018, end: 2038},
	{name: "Doug Tabbutt", 		department: "Information Security", 		start: 2000, end: 2016},
	{name: "Larry Horsfall", 	department: "Administrator", 				start: 1985, end: 1990},
];

//	Ages array
const ages = [16, 38, 9, 57, 12, 41, 47, 13, 9, 18, 21, 33, 1, 99, 56, 23, 17, 23, 2, 77];

//	Simple for loop (the "old way")
for (let i = 0; i < instructors.length; ++i) {
//	console.log(instructors[i]);
}

//	forEach #1
instructors.forEach(function(instructor) {
//	console.log(instructor);
});

//	forEach #2
instructors.forEach(instructor => {
//	console.log(instructor.name);
});

//	filter simulator with for loop
let canVote = [];
for (let i = 0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		canVote.push(ages[i]);
	}
}

//console.log(canVote);

//	Filter example #1
const canVote2 = ages.filter(function(age) {
	if (age >= 18) {
		return true;
	}
});

//console.log(canVote2);

//	Filter example #2
const canVote3 = ages.filter(age => age >= 18);

//console.log(canVote3);

//	Filter example #3
const awdInstructors = instructors.filter(function(instructor) {
	if (instructor.department === "Application Web Development") {
		return true;
	}
});

//console.log(awdInstructors);

//	Filter example #4
const awdInstructors = instructors.filter(instructor => instructor.department === "Application Web Development");

//console.log(awdInstructors);

//	Filter example #5
const notStillHere = instructors.filter(instructor => (instructor.end < 2021));

//console.log(notStillHere);

//	Filter example #6
const stillHere = instructors.filter(instructor => (instructor.end >= 2021));

//console.log(stillHere);

//	Filter example #7
const hereAWhile = instructors.filter(instructor => (instructor.end - instructor.start >= 20));

//console.log(hereAWhile);

//	Map example #1
const instructorNames = instructors.map(function (instructor) {
	return instructor.name;
});

//console.log(instructorNames);

//	Map example #2
const instructorTenure = instructors.map(function (instructor) {
	return `${instructor.name} [${instructor.start} - ${instructor.end}]`;
});

//console.log(instructorTenure);

//	Map example #3
const instructorTenure = instructors.map(instructor => `${instructor.name} [${instructor.start} - ${instructor.end}]`);

//console.log(instructorTenure);

//	Map example #4
//console.log(ages);

const agesDoubled = ages.map(age => age * 2);

//console.log(agesDoubled);

//	"Old-fashioned" sort (wrong results)
const sortedAges = ages.sort();

//console.log(sortedAges);

//	Sort example #2
const sortedAges = ages.sort(function (a1, a2) {
	if (a1 >= a2) {
		return 1;
	} else {
		return -1;
	}
});

//console.log(sortedAges);

//	Sort example #3
const sortedAges = ages.sort((a1, a2) => (a1 >= a2 ? 1 : -1));

//console.log(sortedAges);

//	Sort example #4
const sortedAges = ages.sort((a1, a2) => (a1 - a2));

//console.log(sortedAges);

//	Sort example #5
const sortedAgesReversed = ages.sort((a1, a2) => (a2 - a1));

//console.log(sortedAgesReversed);

//	Reduce simulator with a for loop
let sumOfAges = 0;
for (let i = 0; i < ages.length; ++i) {
	sumOfAges += ages[i];
}

//console.log(sumOfAges);

//	Reduce example #1
const sumOfAges2 = ages.reduce(function(total, age) {
	return total + age;
}, 0);

//console.log(sumOfAges2);

//	Reduce example #2
const sumOfAges3 = ages.reduce((total, age) => total + age, 0);

//console.log(sumOfAges3);

const totalYears = instructors.reduce((total, instructor) => total + (instructor.end - instructor.start), 0);

//console.log(totalYears);

//	Combined example Part a:
const combined = ages
			.map(age => age * 2);

//console.log(ages);
//console.log(combined);

//	Combined example Part b:
const combined = ages
			.map(age => age * 2)
			.filter(age => age >= 75);

//console.log(ages);
//console.log(combined);

//	Combined example Part c:
const combined = ages
			.map(age => age * 2)
			.filter(age => age >= 75)
			.sort((a, b) => a - b);

//console.log(combined);

//	Combined example Part d:
const combined = ages
			.map(age => age * 2)
			.filter(age => age >= 75)
			.sort((a, b) => a - b)
			.reduce((a, b) => a + b, 0);

console.log(combined);
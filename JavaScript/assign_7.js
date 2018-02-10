"use strict"
let dateString = prompt('Enter a date','');
let monthMap = new Map([
	[ 0 , "Januaray" ],
	[ 1 , "Febuary" ],
	[ 2 , "March" ],
	[ 3 , "Aprail" ],
	[ 4 , "May"],
	[ 5 , "June"],
	[ 6 , "July"],
	[ 7 , "August"],
	[ 8 , "September"],
	[ 9 , "Octomber"],
	[ 10, "November"],
	[ 11 , "December"]
]);
let date = new Date(dateString);
console.log(monthMap.get(date.getMonth()));
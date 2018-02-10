 "use strict"
let arrOfObject = [ 
		 {name:"lalit",age:20,id:201452049},
		 {name:"vikas",age:21,id:201452048},
		 {name:"rahul",age:22,id:201452047},
		 {name:"luckky",age:10,id:201452046},
		 {name:"vinod",age:18,id:201452045},
		 {name:"aditya",age:19,id:201452044},
		 {name:"tara",age:26,id:201452043},
		 {name:"anshul",age:27,id:201452042},
		 {name:"binayak",age:16,id:201452041},
		 {name:"nishant",age:21,id:201452040},
		 {name:"arun",age:23,id:201452039}
];

//<-------- Sorted By Age ----------->

function getSortByAge(arr) {
 let tempArr = arr.sort(function (a, b) {
 if(a.age < b.age) return -1;
 if(a.age > b.age) return 1;
 return 0;
 });
 return tempArr;
}

let sortByAge = getSortByAge(arrOfObject);
console.log('Sorted By Name : ', JSON.stringify(sortByAge));

//<-------- Sorted By Name ----------->

function getSortByName(arr) {
 let tempArr = arr.sort(function (a, b) {
 if(a.name < b.name) return -1;
 if(a.name > b.name) return 1;
 return 0;
 });
 return tempArr;
}

let sortByName = getSortByName(arrOfObject);
console.log('Sorted By Name : ', JSON.stringify(sortByName));
"use strict"
function User(name,id,age) {
  this.name = name;
  this.id = id;
  this.age = age;
}

/* sorting by age */
function sortByAge(arrOfObject)
{
	arrOfObject.sort(function(a,b){
	    return a.age - b.age;
    })

    return arrOfObject
}

/* sort by Name*/
function sortByName(arrOfObject){
	arrOfObject.sort(compare);
	return arrOfObject;
}

/* function for comparing */
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name> b.name)
    return 1;
  return 0;
}

let john = new User("john",47,18);
let vikas = new User("vikas",471,28);
let rahul = new User("rahul",17,15);
let luckky = new User("luckky",20,17);
let tara = new User("tara",67,18);
let aadi = new User("aadi",31,21);
let anshul = new User("anshul",59,23);
let deepak = new User("deepak",60,25);
let naresh = new User("naresh",10,11);
let shubham = new User("shubham",34,16);
let aniket = new User("aniket",27,19);
let ajayraj = new User("ajaraj",12,20);
let naiem = new User("naiem",46,31);
let mohit = new User("mohit",62,27);
let nishant = new User("nishant",15,26);
let aditya = new User("aditya",41,23);
let naveen = new User("naveen",37,22);
let adil = new User("adil",23,29);
let moofid = new User("moofid",43,34);

let arrOfObject = [john,vikas,rahul,luckky,tara,aadi,anshul,deepak,naresh,shubham,aniket,ajayraj,naiem,mohit,nishant,aditya,naveen,adil,moofid];
let sortedByAge = sortByAge(arrOfObject);


/*print sorted item by age*/
console.log("sorted by age -------------");
for(let i in  sortedByAge){
	console.log(sortedByAge[i].name+ " : "+sortedByAge[i].age);
}

let sortedByName = sortByName(arrOfObject);

/*print sorted item by name  */
console.log("sorted by name -----------");
for(let j in sortedByName){
	console.log(sortedByName[j].name+ " : "+sortedByName[j].age);
}

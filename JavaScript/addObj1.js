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

/*for deleting perticular Object*/
function delObject(delObj, arrOfObject) {
    
    for (let i in arrOfObject) {
    	if (arrOfObject[i].name === delObj) {
    		arrOfObject.splice(i,1);
    	}
    }
   return arrOfObject;
}

/* for adding object at perticular position in array*/
function addObject(addObj, position,arrOfObject){
    arrOfObject.splice(position,0,addObj);
    return arrOfObject;

}

console.log("Array after object deletion----------");
let arrayAfterDeletion = delObject("vinod",arrOfObject);
for (let i in arrayAfterDeletion) {
  console.log(arrayAfterDeletion[i].name);
}
  
/*array after addition of object */
console.log("Array after object addition-----");
let arrayAfterAddition = addObject({name:"kamal",age:27,id:201452070},4,arrOfObject);
for( let i in arrayAfterAddition ) {
  console.log(arrayAfterAddition[i].name);
  }
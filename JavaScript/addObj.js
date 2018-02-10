"use strict"
function User(name,id,age) {
  this.name = name;
  this.id = id;
  this.age = age;
}

let john = new User("john",47,18);
let vikas = new User("vikas",471,28);
let rahul = new User("rahul",17,15);
let luckky = new User("luckky",20,17);
let tara = new User("tara",67,18);
let aadi = new User("aadi",31,21);
let anshul = new User("anshul",59,23);
let deepak = new User("deepak",60,25);
let jay = new User("Jay",56,27);

let arrOfObject = [john,vikas,rahul,luckky,tara,aadi,anshul,deepak];

/* for delete object*/
function delObject(delObj, arrOfObject){
    let indexOfdelObj = arrOfObject.indexOf(delObj);
    arrOfObject.splice(indexOfdelObj,1);
    return arrOfObject;  
   
}

/* for adding object at perticular position in array*/
function addObject(addObj, position,arrOfObject){
    arrOfObject.splice(position,0,addObj);
    return arrOfObject;

}

/* array after deleting object*/
console.log("Array after object deletion----------");
let arrayAfterDeletion = delObject(luckky,arrOfObject);
for(let i in arrayAfterDeletion){
  console.log(arrayAfterDeletion[i].name);
}

/*array after addition of object*/
console.log("Array after object addition-----");
let arrayAfterAddition = addObject(jay,4,arrOfObject);
for(let i in arrayAfterAddition ){
  console.log(arrayAfterAddition[i].name);
}
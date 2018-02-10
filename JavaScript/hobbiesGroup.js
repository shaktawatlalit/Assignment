"use strict"
let arrObj = [{id:1,name:'lalit',age:21,hobbies:"['reading','politics','music','cricket','football']"},
               {id:2,name:'vikas',age:19,hobbies:"['reading','travelling','news','music']"},
               {id:3,name:'rahul',age:22,hobbies:"['reading','travelling','music','news','cricket']"},
               {id:4,name:'aadi',age:22,hobbies:"['reading','travelling','music','football']"},
               {id:5,name:'luckky',age:23,hobbies:"['reading','travelling','music','news']"},
               {id:6,name:'tara',age:17,hobbies:"['reading','travelling','serial','hockey']"},
               {id:7,name:'rahul1',age:25,hobbies:"['eating','travelling','music']"},
               {id:8,name:'anshul',age:27,hobbies:"['reading','travelling','music','Bathing','cricket']"},
               {id:9,name:'moofid',age:16,hobbies:"['reading','travelling','football','sleeping']"},]



function getHobbyFollowers(hobby,arrObj) {
	       let user ={}; 
	       let arr =[];                           //array to contain the name of user who have perticular hobbies.
          for(let i =0 ; i<arrObj.length; i++){
          	 if(arrObj[i].hobbies.indexOf(hobby) !=-1){
                      arr.push(arrObj[i].name); 
          	 }
          }
          user[hobby] = arr;
return user;
}


let result = getHobbyFollowers('cricket',arrObj);
console.log(result);
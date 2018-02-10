"use strict"
function insertString(string,enterdString,position) {
          if((enterdString != ' ') && (string !=null)) {
          	if(string.length >= position){
          		return string.slice(0,position)+ enterdString + string.slice(position,);
          	} else {
               	  console.log("please enter valid position for string enterence");
               }
           } else {
           	console.log("please enter valid string ");
           	return;
           }

}
let string = "lalitshaktawat";              //given string
let enterdString = prompt('Enter string that you want to inset !', ' '); // string that we have to enter
let position = Number(prompt('enter the position where you want to insert string ','1'));   //position where we have to insert string
console.log(insertString(string,enterdString,position));





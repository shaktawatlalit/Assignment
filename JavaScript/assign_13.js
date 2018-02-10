"use strict"
/* function to chopped array into given chunk size*/

let getStringChunk = (string,chunkSize) => {
           if(checkStringValidation(string,chunkSize)) {
           	   
           	   let chopedArray = [];
                for(let i = 0; i<string.length; i=i+chunkSize){
           	  	    chopedArray.push(string.slice(i,i+chunkSize));
           	  }
              return chopedArray;
           } else {   
               console.log("Enter valid string or chunk");
               return;
           }
}

/*function to check if string is empty or not*/

function checkStringValidation(string,chunkSize) {
	  if(chunkSize > string.length)
        { 
             if(string != ' ') {
             	return true;
             } else {
             		return false;
             }
        } else {
        	if(chunkSize === 0){
        		return false;
        	} else {
        		return true;
        	}
        }
}



let string = prompt('Enter string that have to be chopped',' ');
let chunkSize = Number(prompt('Enter chunk size','0'));
let stringChunk = getStringChunk(string,chunkSize);
console.log(stringChunk);
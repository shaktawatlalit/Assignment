"use strict"
/* return shuffled array*/
function getShuffleArray(arr){
       if(arrLength == 0) {                //checking for empty error
       	alert("Array is empty");
       	return;
       } else {  
         for(let i = 0; i<arrLength; i++) {
                   let randomNumber = getRandomNumber(arrLength);          
                   arr = swapArrayElement(i,randomNumber,arr);        // swap the element of array with the random index 
           }
       	  return arr;                                                //returning shuffled array
       }

}


/* generate random number */
function getRandomNumber(arrLength) {
	return Math.floor((Math.random() * arrLength));
}

/*swap the array element with randomly generated index */
function swapArrayElement(i, randomNumber,arr) {            
         let temp = arr[i];
         arr[i] = arr[randomNumber];
         arr[randomNumber] = temp;
         return arr; 
}


let arr = ["Lalit","Luckky","Pankaj","Ankit","Yash","Ritz"];
let arrLength = arr.length;
let shuffleArray = getShuffleArray(arr);
console.log(shuffleArray);
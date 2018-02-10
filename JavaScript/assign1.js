"use strict"
/*  return last element of array */
function getlastElement(arr)e{
	if(arrLength === 0){                   //checking for array empty
		return;
	}
	else {
		return arr[arrLength-1];
	}

}

/* return first element of array */
function getfirstElement(arr){
	if(arrLength === 0){                     //checking for empty array
		return;
	}
	else
	{
		return arr[0];
	}
}

/*return first n element of the array   */

function getfirstNelement(arr,n){
	if(n > arrLength){
         return;
	}
	else{
		return arr.slice(0,n);
	}
}

/*return last n element of the array  */
function getLastNelement(arr,n) {
	let startIndex = arrLength - n;
	if(startIndex < 0){
		return;
	}
	else{
		return arr.slice(startIndex,);
	}

}


let arr = ["Apple","Boy","Cat","Dog","Elephent","Fish","Goat","Hen","Ice-Cream","Jug"];
let arrLength = arr.length;                               //length of array
console.log(getlastElement(arr));                      //get Last Element
console.log(getfirstElement(arr));                     //get first element
console.log(getfirstNelement(arr,4));                  // get first N element
console.log(getLastNelement(arr,4));                   //get Last N element
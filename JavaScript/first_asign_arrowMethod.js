"use strict"
/*Get First Element of the array*/
let getFirstElement = (arr) => {
	if(arrLength === 0){
		console.log("Array is empty");
		return;
	}
	else
	{
		return arr[0];
	}

}

/*Get Last Element of the array*/
let getLastElement = (arr) => {
	if(arrLength === 0){
		console.log("Array is empty");
		return;
	}
	else
	{
		return arr[ arrLength - 1 ];
	}
}

/*Get First N element of the array*/
let getfirstNelement = (arr, n) => {
	if(arrLength < n){
         console.log("Array Does not have " + arrLength+ " element");
         return;
	}
	else
	{
		return arr.slice(0,n);
	}
}

/*Get Last N element of the array */
let getLastNelement = (arr,n) => {
	let startIndex = arrLength - n ;
	if(startIndex < 0){
		console.log("Array Does not have "+ arrLength + " element");
		return ;
	}
	else
	{
		return arr.slice(startIndex,);
	}
}



let arr = [1,2,3,4,5,6,7,8,9];
let arrLength = arr.length;
console.log(getLastElement(arr));                      //get Last Element
console.log(getFirstElement(arr));                     //get first element
console.log(getfirstNelement(arr,4));                  // get first N element
console.log(getLastNelement(arr,4));                   //get Last N element
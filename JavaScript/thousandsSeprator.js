"use strict"

let num = prompt('Enter the number you want to thousands separate','0');
function getThousandsSeparate(num) {
    let numArr = Array.from(num);              // the number into array
    let numArrLength = numArr.length;
    let remainder = numArrLength % 3;          //find remainder of array length with 3
    let commaCount =0;                           
    if (remainder != 0)
    {
    	numArr.splice(remainder,0,",");          //insert , at position    
    	commaCount = 1;
    }
    let p = remainder + commaCount +3;
    for(let i = p; i < numArrLength;) {
    	numArr.splice(i,0,",");
    	commaCount = 1;
    	i = commaCount + i + 3;
    	numArrLength = numArrLength +1;
    }
  return numArr.join('');
}


if(Number(num) < 1000) {
	console.log("please give number >= 1000");
} else {
	let thousandsSeparteNumber = getThousandsSeparate(num);
	console.log(thousandsSeparteNumber);

}
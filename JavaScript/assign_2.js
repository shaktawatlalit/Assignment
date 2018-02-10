"use strict"
let number = Number(prompt("Enter a number",'0'));            //Asking user to enter number
let insertDash = (number) => {
          if( isNaN(number) || number === 0 ) {                //checking for valid Number
          	alert("Please enter a valid number");
          	return ;
          } else {    
          	 let numString = String(number);     
             let i=0;
             while(i != numString.length) {
             	      if((Number(numString[i])%2 == 0) && (Number(numString[i+1])%2 == 0)) {         //checking for continous even digit
             		           numString  = numString.slice(0,i+1) + "-"+ numString.slice(i+1,);     //Inserting dash between even digit.     
             		           i=i+2;
             	} else {
             		i=i+1;
             	}
             	
             }
             return numString;
          }

} 

console.log(insertDash(number));
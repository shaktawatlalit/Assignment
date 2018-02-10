"use strict"
let getTime = (milliseconds) => {
     let date = new Date(Number(milliseconds));
     return date;
}

let dateString = prompt('Enter millisecond spend after 1 january 1971','0');
console.log(getTime(dateString));
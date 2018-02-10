"use strict"
function hideEmail(email) {
    let arr = email.split('@');
   return arr[0].slice(0,3)+ "...@" +arr[1];
}


let email = "201452049@iiitvadodara.ac.in";
console.log(hideEmail(email));
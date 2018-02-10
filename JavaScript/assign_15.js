"use strict"
function checkValidEmail(emailAddress,emailMatchedPattern) {
	    let success = "Valid Email";
	    let fail  = "Invalid Email";
        if(emailAddress.match(emailMatchedPattern)) {
        	return success;
        } else {
        	throw new Error('Invalid Email');
        }
}


let emailAddress = prompt("Enter email Address",'shaktawat6869@gmail.com');
let emailMatchedPattern = /[a-z0-9.]+@\w+[.][.\w]+/;
console.log(checkValidEmail(emailAddress,emailMatchedPattern));
"use strict"
function fillArrayWithValues(firstElement,lastElement,step) {
	let filledArray = [];
    let loopCondition = true;
    while(loopCondition) {
    	filledArray.push(firstElement);
        firstElement = String.fromCharCode((firstElement.charCodeAt(0)) + step);    //increase element by step .
        if(firstElement.charCodeAt(0)>lastElement.charCodeAt(0)) {
        	loopCondition = false;
        }
        
    }
    return filledArray;
}




console.log(fillArrayWithValues('a','z',2));

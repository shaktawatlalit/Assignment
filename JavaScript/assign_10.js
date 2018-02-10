"use strict"
/*calculating year difference between date*/
function getYearDifference(firstDate,secondDate) {
      let millisecondDifference  = (+firstDate) - (+secondDate);
      return Math.floor(Math.abs(millisecondDifference/(365*24*60*60*1000)));
}

/*calculating month difference bewteen date*/
function getMonthDiffernce(firstDate,secondDate) {
	let millisecondDifference  = (+firstDate) -(secondDate);
	return Math.floor(Math.abs(millisecondDifference/(365*24*60*60*1000/12)));
 } 

/*calculating day difference between date*/
 function getDayDifference(firstDate,secondDate) {
 	 let millisecondDifference  = (+firstDate) - (+secondDate);
 	 return Math.floor(Math.abs((millisecondDifference)/(24*60*60*1000)));

 }
 /*calculating week difference between date*/

 function getWeekDifference(firstDate,secondDate) {
 	 let millisecondDifference = (+firstDate) -(+secondDate); 
 	 return Math.floor(Math.abs((millisecondDifference)/(7*24*60*60*1000)));

 }
 /*calculating Hour difference between date*/
function getHourDifference(firstDate,secondDate) {
	return Math.abs(firstDate.getHours() - secondDate.getHours());
}

/*calculating Minute difference between date*/
function getMinutesDifference(firstDate, secondDate) {
    return Math.abs(firstDate.getMinutes() -secondDate.getMinutes());
}



let firstDate = new Date(2011, 0, 1, 12, 3, 4, 567);
let secondDate = new Date(2013, 0,1, 10, 1, 6, 567);
let yearDifference = getYearDifference(firstDate,secondDate);
let monthDifference = getMonthDiffernce(firstDate,secondDate);
let dayDifference = getDayDifference(firstDate,secondDate);
let weekDifference = getWeekDifference(firstDate,secondDate);
let hourDifference = getHourDifference(firstDate,secondDate);
let minuteDifference = getMinutesDifference(firstDate,secondDate);

console.log("Year difference is : "+yearDifference);
console.log("Month difference is: "+monthDifference);
console.log("Day difference is : " +dayDifference);
console.log("week difference is :"+weekDifference);
console.log("Hour difference is : " +hourDifference);
console.log("minute difference is :"+minuteDifference);
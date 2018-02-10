"use strict"
/*calculating year difference between date*/
function getYearDifference(firstDate,secondDate){
      let yearDifference = (+firstDate) - (+secondDate);
      return Math.floor(yearDifference/(365*24*60*60*1000));
}

/*calculating month difference bewteen date*/
function getMonthDiffernce(firstDate,secondDate){
	let monthDifference = (+firstDate) -(secondDate);
	return Math.floor(monthDifference/(365*24*60*60*1000/12));
 } 

/*calculating day difference between date*/
 function getDayDifference(firstDate,secondDate){
 	 let dayDifference = (+firstDate) - (+secondDate);
 	 return Math.floor((dayDifference)/(24*60*60*1000));

 }
 /*calculate date difference between date*/

 function getDateDifference(firstDate,secondDate){
 	 return Math.abs(firstDate.getDate() - secondDate.getDate());

 }


let firstDate = new Date("2018-01-15");
let secondDate = new Date("2017-07-26");
let yearDifference = getYearDifference(firstDate,secondDate);
let monthDifference = getMonthDiffernce(firstDate,secondDate);
let dayDifference = getDayDifference(firstDate,secondDate);
let dateDifference = getDateDifference(firstDate,secondDate);
console.log("Year difference is : "+yearDifference);
console.log("Month difference is: "+monthDifference);
console.log("Day difference is : " +dayDifference);
console.log("Date difference is :"+dateDifference);
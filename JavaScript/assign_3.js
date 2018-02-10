"use strict"
let getMostFrequentItem = (arr)=> {
	let i=0,j;
	let mostFreqCount = 0;                       // The count of most Frequent word
    let mostFreqItemIndex = 0;                  //  Index of the most Frequent Element
	for(i=0;i<arr.length;i++){
		let count = 1;
		for(j=i+1;j<arr.length;j++){
                if(arr[i] === arr[j])
                	count++;
		}
		if(count > mostFreqCount){
		    mostFreqCount = count;
			mostFreqItemIndex = i;
		}
	}
  return arr[mostFreqItemIndex];
}



let arr = [8,,3,5,3,5,6,7,7,8,9,4,5,6,7,7,7,7,7,7,7,7];
let mostFrequentItem = getMostFrequentItem(arr);
console.log(mostFrequentItem);
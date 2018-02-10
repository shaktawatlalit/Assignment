"use strict"
/* Union of Arrays*/
let getUnionOfArray = (batchTopper,batchPlayer) => {
			if(batchTopper.length == 0 && batchPlayer.length ==0) {
				console.log("Both Array are empty");
				return;
			} else {
		            let unionOfArray = new Set(batchTopper.concat(batchPlayer));
		            return unionOfArray;
		        }
}

/*Differences of Arrays*/
let getDifferenceOfArray = function(batchTopper,batchPlayer) {
	        if(batchTopper.length == 0 && batchPlayer.length == 0) {
	        	console.log("Both Array is empty");
	        	return;
	        } else {
	        	let batchTopperSet = new Set(batchTopper);
	            let batchPlayerSet = new Set(batchPlayer);
                let differenceOfArray = new Set([...batchTopperSet].filter(student => !batchPlayerSet.has(student)));
                return differenceOfArray;
            
	        }
}


let batchTopper = ["shreya","paraul","Latika","Bhuri","Latika","vikas","rahul"];
let batchPlayer = ["vinod","Kajal","Latika","Bhuri","Bhoopendra"];

let unionOfArray =  getUnionOfArray(batchTopper,batchPlayer);
let differenceOfArray = getDifferenceOfArray(batchTopper,batchPlayer);
console.log(unionOfArray)
console.log(differenceOfArray);
"use strict"
let htmlChanger = ( function () {
	let changeHtml = (cont) => {
		let element = document.getElementById("attribute-to-change");
		element.innerHTML = cont;
		
	}

	return {
		changeToHtml : function(cont) {
			changeHtml(cont);
            
	}
 
}})();

htmlChanger.changeToHtml("vikas");
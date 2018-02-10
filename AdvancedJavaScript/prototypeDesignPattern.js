"use strict"
let teslaMoterJs = function() {
	 this.numWheels    = 4;
	 this.manufacturer = 'Tesla';
	 this.make         = 'Model S';
}

/*teslaMoterJs.prototype.go = function() {
	console.log("teslaMoterJs walks");
}
teslaMoterJs.prototype.stop = function() {
	console.log("teslaMotorJs stops");
}*/

teslaMoterJs.prototype = function() {
	let go = function() {
	console.log("tesla motor walks");
	};

	let stop = function () {
	console.log("teslaMotor stops");
	}

	return {
		pressBreakPedal : stop,
		pressGasPedal : go
	}


}();
teslaMoterJs.prototype.pressGasPedal();




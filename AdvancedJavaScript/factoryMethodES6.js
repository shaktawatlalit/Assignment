"use strict"

/* Car class to create the car instance */
class Car {
	constructor(options) {
		this.doors = options.doors || 4;
		this.wheel = options.wheel || 4;
		this.color = options.color || "blue";
	}

/* commenting about car*/
	run() {
		console.log("this "+this.color+" car is very beautiful");
	}
}


/* Truck class to create truck*/

class Truck {
	constructor(options) {
		this.doors = options.doors || 2;
		this.wheel = options.wheel || 8;
		this.color = options.color || "green"; 
	}
    
    /* commenting about truck */
    run() {
		console.log("this "+ this.color +" truck is very beautiful");
	}
}

/*vehicle factory to produce the vehicle */

class VehicleFactory {
	
	createVehicle(options) {
		switch(options.type){
			case "car":
			   this.vehicleClass = Car;
			   break;
			case "truck":
			   this.vehicleClass = Truck;
			   break;
		}

		return new this.vehicleClass(options);
	}
}


let factory = new VehicleFactory();                                           //creating a vehicleFactory instance.
let car = factory.createVehicle({type:"car",doors:4,wheel:4,color:"black"});  // creating a vehical which has type car
car.run();

let truck = factory.createVehicle({type:"truck",doors:3,wheel:8,color:"green"}); // creating a vehicle which has type truck
truck.run();
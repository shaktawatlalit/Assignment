function Rabbit() {

}

console.log(Rabbit.prototype.constructor); // shows the constructor rabbit
console.log( Rabbit.prototype.constructor === Rabbit); // default constructor

Rabbit.prototype.constructor = function (name) {
	this.name = name ;
}
console.log(Rabbit.prototype.constructor);  // show modified constructor 

let rabbit = new Rabbit.prototype.constructor("miki");
console.log(rabbit.name);
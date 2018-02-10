"use strict"
let Calc = function (start) {
      this.add = function (x) {
      	 start = start + x;
      	 return this; 
      }

      this.multiply = function (x) {
      	 start = start * x;
      	 return this;
      }

      this.final = function (callback) {
      	 callback(start);
      	 return this;

      }
}

new Calc(0).add(1).add(2).multiply(3).final(function (result) {
	alert(result);
})
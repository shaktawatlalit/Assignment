"use strict"
let instance = null ;

/* createing singleton class */

class Singleton {
	constructor() {
		if(!instance) {
			instance = this;
			
		}

    this.schema = "Database";
	this.databaseName = "company";
	this.connectionName = "";
	this.randomNumber = Math.random();
	return instance;

	}

/* creating database connection */

    createDatabaseConnection() {
    	console.log("connection established");
        this.connectionName = "created_connection_name";
        return this.connectionName;
    }


}

let singletonObject = new Singleton();               // created singleton object
singletonObject.createDatabaseConnection();          // creating database connection name 
console.log(singletonObject.connectionName);         // getting database connection name

let singletonObject1 = new Singleton(); 
console.log(singletonObject1 === singletonObject);   // it is showing that both singletonObject and singletonObject1 are the same object

/* these two are generating same number so both are same object  */
console.log(singletonObject.randomNumber);
console.log(singletonObject1.randomNumber);
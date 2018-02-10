"use strict"
class Subject {
	constructor() {
		this.observersList = [];
	}

	addObserver(observer) {
		this.observersList.push(observer);
	}

	removeObserver(observer) {
		let indexOfObserver = this.observersList.indexOf(observer);
		this.observersList.splice(indexOfObserver,1);
	}

	notifyObserver(observer) {
		let indexOfObserver = this.observersList.indexOf(observer);
		this.observersList[indexOfObserver].notify(indexOfObserver);

	}

	notifyAllObserver() {
		for (let i = 0; i<this.observersList.length; i++) {
			this.observersList[i].notify(this.observersList[i].name);
		}
	}
}


class Observer {
	constructor(name) {
		this.name = name;
	}

	notify(i) {
		console.log("Hello observer "+ i + " is notified");
		this.update();
	}

	update() {
		this.name = "karlos";
	}
}

let subject = new Subject();
let lalit = new Observer("lalit");
let vikas = new Observer("vikas");
let jai = new Observer("jai");
let viru = new Observer("viru");

subject.addObserver(lalit);
subject.addObserver(vikas);
subject.addObserver(jai);
subject.addObserver(viru);

//subject.notifyObserver(jai);
//subject.notifyAllObserver();
subject.removeObserver(viru);
subject.notifyAllObserver();
console.log(lalit.name);
console.log(jai.name);
console.log(viru.name);
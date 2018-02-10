"use strict"
/* store the information about person */
class Person {
	constructor() {
		this.persons = [];

	}
	set setPerson(personObj) {
		this.persons.push(personObj);

	}

	 get getPerson() {
		return this.persons;
	}

	walk() {
		console.log(`person walks quickly`);
	}

}

let person = new Person();
let john = { name:"john", age:18, address:"rang-vihar", motherName:"kusum", fatherName:"shyam"};
let vikas = { name:"vikas", age:19, address:"rang-vihar1", motherName:"kusumari", fatherName:"shyam2"};
let rahul = { name:"rahul", age:20, address:"rang-vihar2", motherName:"kanwar", fatherName:"shyam3"};


person.setPerson = john;
person.setPerson = vikas;
person.setPerson = rahul;




class Professor extends Person {
	constructor() {
		super();
		this.professors = [];
	}

	set setProfessor(professObj) {
		this.professors.push(professObj);
		person.setPerson = professObj;
	}

	get getProfessor() {
		return this.professors;
	}
    
    walk() {
    	console.log(`professor walk slowly`);

    }
	changeName(name1, name2) {
		for(let i = 0; i<this.professors.length; i++) {
			if(this.professors[i].name === name1) {
				this.professors[i].name = name2;
				console.log(i);
			} 
		}
		
	}
}

let professor = new Professor();
let johnProfessor = { name:"Dr.john", age:40, address:"rang-vihar3", motherName:"kusumPorf", fatherName:"shyamProf"};
let vikasProfessor = { name:"Dr.vikas", age:41, address:"rang-vihar4", motherName:"kusumariProf", fatherName:"shyam2Prof"};
let rahulProfessor = { name:"Dr.rahul", age:42, address:"rang-vihar5", motherName:"kanwarProf", fatherName:"shyam3Prof"};


professor.setProfessor = johnProfessor;
professor.setProfessor = vikasProfessor;
professor.setProfessor = rahulProfessor;

console.log(professor.getProfessor);
console.log(person.getPerson);

person.walk();

professor.changeName("Dr.john","Dr.mohit");

let profArray = professor.professors;
console.log(profArray);
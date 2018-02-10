"use strict"
let sayHiMixin = {
  sayHi() {
    console.log("Hello " + this.name);
  }
}
/*simple Inheritence --- Multiple student ---
 person class that stores information like name, age, address, mothername, fathername about student*/
class Person {
     constructor(name, age, address, motherName, fatherName) {
          this.name = name;
          this.age = age;
          this.address = address;
          this.motherName = motherName;
          this.fatherName = fatherName;
     }
     
     /* get the Address of the person*/
     get addressOfPerson() {
          return this.address;
     }
     
     /* set the address of the person */
     set addressOfPerson(address) {
           this.address = address;
     }
     
     /*full desciption about person*/
     fullDescriptionAboutPerson() {
       return "Hello I am "+ this.name + " my age is "+ this.age +" my address is "+ this.address + " my motherName is " + this.motherName + " My father name is " + this.fatherName;
     }
}

/* student class that stores information like name, id, age, cpi about student */
class Student extends Person{

     /* constructor function to initilize the value of student object */
     constructor(name, id, age, cpi, address, motherName, fatherName) {
          super(name, age, address, motherName, fatherName);
          this.id = id;
          this.cpi = cpi;
     }
     
     /* get function return the name of student */
     get nameOfStudent() {
        return this.name;
     } 
     
     /* to set the name of student */
     set nameOfStudent(name) {
        this.name = name;
     }
     
     /* function to get the id of the student */
     get idOfStudent() {
        return this._id;
     }
     
     /* function to set the name of the student */
     set idOfStudent(id) {
        this._id = id;
     }
     
     /* function to get the age of the student */
     get ageOfStudent () {
        return this._age;
     }
     
     /* function to set the age of the student */
     set ageOfStudent(age) {
        this._age = age;
     }
     
     /* function to set the cpi of the student */
     get cpiOfStudent() {
        return this._cpi;
     }
      
    /* function to set the cpi of the student */
     set cpiOfStudent(cpi) {
        this._cpi = cpi;
     }
      
     /*function return the full description of the student */
     fullDescription() {
        let fullDescriptionOfPerson = super.fullDescriptionAboutPerson();
        return fullDescriptionOfPerson + "Hii i am " + this.name + " My age is " + this.age + " and my cpi is " + this.cpi;
     }
     
}

/* class to store the student that  are library member */
class LibraryMember extends Student {

  /* constructor to initilize the instance of libraryMember */
  
  constructor(name, id, age, cpi, address, motherName, fatherName, libraryId, libraryInsaurance) {
    super(name, id, age, cpi, address, motherName, fatherName);
    this.libraryId = libraryId;
    this.libraryInsaurance = libraryInsaurance;
       
  }
  
  /* description about the library id and library insaurance of library member*/
  descriptionAboutLibraryMember() {
    let fullDescriptionAboutStudent = super.fullDescription();
    return fullDescriptionAboutStudent + "Hello I have "+ this.libraryId +" id and i also have insaurance of "+ this.libraryInsaurance + " rupees.";

  }

  static libraryName() {
     return "Library name is Bharat Libraray";
  }
} 

/* profeessor class to store the information about professor */
class Professor extends Person {
     constructor(name, age, address, motherName, fatherName, areaOfInterest, degree) {
      super(name, age, address, motherName, fatherName);
      this.areaOfInterest = areaOfInterest;
      this.degree = degree;
     }
   /* return the area of interest of professor */
     get areaOfInterestOfProfessor() {
      return areaOfInterest;
     }
  /*set the area of interest of professor */

    set areaOfInterestOfProfessor(areaOfInterest) {
      this.areaOfInterest = areaOfInterest;
    }
  /* return full description about the professor */
    fullDescriptionAboutProfessor() {
       let descriptionAboutPerson = super.fullDescriptionAboutPerson();  //retrieve the description about person 
       return console.log(descriptionAboutPerson + "My area of interest are " + this.areaOfInterest + " my degree is " + this.degree);
    }
}

/* creating instance of the Library Member class*/
let ravish = new LibraryMember("Ravish", 201452049, 20, 6.8,"Village - goyanda", "Ramesh kanwar","HimmatRaj singh", "lib101", 30000);
let mannu = new LibraryMember("Mannu", 201452049, 20, 6.8,"Village - goyanda","kusum hada","nirav singh", "lib102", 30000);
let drish = new LibraryMember("drish", 201452049, 20, 6.8,"Village - goyanda","jailalita","swami", "lib103", 30000);
let krish = new LibraryMember("krish", 201452049, 20, 6.8,"Village - goyanda","monika","manohar", "lib104", 30000);


console.log(mannu.descriptionAboutLibraryMember());     /* showing the description about insaurance of library member*/
console.log(mannu.fullDescription());                  // showing the full description of library member//
console.log(mannu.fullDescriptionAboutPerson());
 
Object.assign(LibraryMember.prototype, sayHiMixin);   // assign a mixin to library member

ravish.sayHi();    // calling mixin on library membr object

let professorAseem = new Professor("Aseem", 40, "sector-28","sudha", "Dev", "Statistics", "PHD"); // creating a object of profesor
professorAseem.fullDescriptionAboutProfessor();      // print the detail of professor

/* accessing static method od library member class */
console.log(LibraryMember.libraryName());  

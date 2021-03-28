//jshint esversion:6
'use strict';


// Class 
class PersonCL {
    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //---- Methods will be added to the .prototype property ----

    calc() { // Gets added automatically to the prototype of Class (PersonCL)
        return 2021 -  this.birthYear;
    }

    // Getters & Setters 

    get age() { // Of course this is similar to calc() above, but just an example of a getter, no need to use () method. 
        return 2021 - this.birthYear;
    } 
    // So if we set a property that already exist(such as under the constructor) use the _ underscore feature to differ ake fullName becomes _fullName
    set fullName(name) {
        name.includes(" ") ?  this._fullName = name :null // fullName now becomes _fullName
    }
    get fullName(){
        return this._fullName;
    }
    static hey() {
        console.log("hey"+this);
    }

}

// New Instance(s)
const jessica = new PersonCL("Jessica Tylon",1682);
const Neal = new PersonCL("Nesl sobber ",1783);


//console.log(jessica);
//console.log(jessica.__proto__ === PersonCL.prototype);
let age = jessica.calc();
console.log(age);
console.log(jessica.age); // read the property age 

PersonCL.prototype.greet = function(){
    console.log(`${this._fullName}`);
    console.log(this.fullName); // Note _fullName not fullName because the setter has invoked
};
jessica.greet();

//PersonCL.hey();

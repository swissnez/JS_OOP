//jshint esversion:6
'use strict';

const Person = function(firstName,birthYear){ // Blueprint! 
    //Instance props
    this.firstName = firstName;
    this.birthYear = birthYear;
    
};

const BillBob = new Person("BillBob",37);
console.log(BillBob instanceof Person); //True
console.log(Person.prototype.isPrototypeOf(BillBob)); // True
console.log(Person.prototype);
// Prototypes




// calc function note isn't inside any object instance such as BillBob for example so we use prototype to link it to the constructor
Person.prototype.calc = ()=>{ 
    return 2037 - this.birthYear;
};

Person.prototype.species = "Homo Sapiens";
console.log(BillBob.species);
// let age = BillBob.calc();
// console.log(age);

console.log(BillBob.__proto__ === Person.prototype); // we can see that the instance BillBob use the prototype and it's proven here 


console.log(BillBob.hasOwnProperty("firstName"));

console.log(Person.prototype.isPrototypeOf(BillBob));

// const Vehicle = function(make,model,year){
//     make,
//     model,
//     year
// };

// const myBeast = new Vehicle("ford",45,2045);
// Vehicle.prototype.lights = ()=>{
//     console.log("BLINK BLINK");
// };
// myBeast.lights();
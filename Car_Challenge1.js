//jshint esversion:6
'use strict';

// Constructor 
const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
};


Car.prototype.accelerate = function(){
    console.log(this.speed +=10);
};

Car.prototype.brake = function(){
    console.log(this.speed -=5);
};


let CAR1 = new Car("BMW",120);
let CAR2 = new Car("Mercedes",95);

CAR1.accelerate();
CAR1.brake();

//jshint esversion:6
'use strict';


class Car {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }

    get speedUS(){
        return this.speed / 1.6;
    }
    accelerate(speed){
        return this.speed +=10;
    }
    
    brake(speed){
        return this.speed -=5;
    }

}







// Instances 

const vw = new Car("VW",122);
const bmw = new Car("BMW",145);

bmw.accelerate();
bmw.brake();

console.log(vw.speedUS);
console.log(bmw.speedUS);

vw.speedUS = 193;


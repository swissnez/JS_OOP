//jshint esversion:6
'use strict';

const PersonProto = {
    calcAge() {
        return 2021 - this.birthYear;
    },
    init(name,year) {
        this.name = name;
        this.year = year;
    }
};

const Steven = Object.create(PersonProto);
console.log(Steven);


Steven.name = "Steven";
Steven.birthYear = 1999;
console.log(Steven.calcAge());


console.log(PersonProto === Steven.__proto__);



const Linn = Object.create(PersonProto);
Linn.init("Linn loss",1883);

console.log(Linn.calcAge());
console.log(Linn);

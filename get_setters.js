//jshint esversion:6
'use strict';


const account = {
    owner: "TEST",
    movements: [200,200,120,-4002,10],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    },
    dump: function(){
        console.log(this);
    }
};

console.log(account.latest); // returns 10

account.latest = 45; // note we don't need to call it like we would as method() account.latest() instead it's a prop hence just prop = whatever

console.log(account.movements); // [ 200, 200, 120, -4002, 10, 45 ]

account.dump();
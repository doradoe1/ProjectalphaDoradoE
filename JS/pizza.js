let Size = require('./size');

let pizzasizes = [
    new Size('small', 5),
    new Size('medium', 10),
    new Size('large', 15)
];

function getSize (s) {
    for (let i=0; i < pizzasizes.length; i += 1){
        if(pizzasizes[i] == s){
            return pizzasizes[i];
        }
    }
}

function Pizza(c, s, t) {
    this.id = null;
    this.crust = c;
    this.size = getSize(s);
    this.toppings = t;
}

module.exports= Pizza;
export {Pizza}; 

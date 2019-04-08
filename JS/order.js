let Pizza = requrie('./pizza');
//import { Pizza } from "./pizza.js";
function Order() {
    this.id = null;
    this.Pizza = [];
    this.cost = function () {
        let sum = 0;
        this.Pizza.forEach(function (pz) {
            sum += pz.size.price;
        });
        return sum;
    }
}

module.exports = Order;
export {Order};


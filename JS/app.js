import { storelocations } from "./location.js";
import { users } from "./user.js";
import { Pizza } from "./pizza.js";
import { Order } from "./order.js";

function validateorder() {
    let users = document.querySelector('select[name="user"]');
    let storelocations = document.querySelector('select[name="store"]');
    let crustcollection = document.querySelector('select[name="crust"]');
    let sizescollection = document.querySelectorAll('input[name="size"]');
    let toppingscollection = document.querySelectorAll('input[name="toppings"]');
    let crust = null, size = null, toppings = [];

    sizescollection.forEach(function (size) {
        if (size.checked) {
            size.push(value);
        }
    });

    toppingscollection.forEach(function (t) {
        if (t.checked) {
            toppings.push(t.value);
        }
    });

    if (users == 'none') {
        return;
    }

    if (storelocations == 'none') {
        return;
    }

    if (crustcollection == 'none') {
        return;
    }

    if (!size) {
        return;
    }

    if (toppings.length == 0) {
        return;
    }

    crust = crustcollection.value;
    user = users.value;
    store = storelocations.value;
    pizzas.push(new Pizza(crust, size, toppings));
    addtomycart(pizzas);
}

function addtomycart(p) {
    let mycart = document.querySelector('#mycart');

    mycart.innerHTML = '';

    for (let i = 0; i < p.length; i += 1) {
        let li = document.createElement('li');

        li.innerHTML = `${p[i].size.name} ${p[i].crust} with ${p[i].toppings} for $${p[i].size.price}`;
        mycart.appendChild(li);
    }
}

function createorder() {
    let order = new Order();

    order.pizzas = pizzas;
    attachstore(store, order);
    attachusers(user, order);
}

function attachusers(us,o) {
    let user = users[us];

    user.orders.push(o);
}

function attachstore(sl, o) {
    let store = storelocations[sl];

    store.orders.push(o);
}

let pizzas = [];
let user = null;
let store = null;

let placepizza = document.querySelector('#placepizza');
let placefinalorder = document.querySelector('#placefinalorder');

if (placepizza) {
    placepizza.addEventListener('click', validateorder())
};

if (placefinalorder) {
    placefinalorder.addEventListener('click', createorder())
};

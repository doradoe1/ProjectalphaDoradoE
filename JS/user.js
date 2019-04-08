let Address = require('./address');
let Order = require('./order');

let users =[
new user(1),
new user(2),
new user(3),
new user(4),
new user(5)
];

function User() {
    this.address = new Address();
    this.order = new Order();
};

module.exports = User;
export {User, users};


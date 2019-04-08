let Order = require('./order');


let storelocations = {
    helheimstreet: new storelocation('helheimstreet'),
    alfheimstreet: new storelocation('alfheimstreet'),
    jotunheimstreet: new storelocation('jotunheimstreet'),
    midgard: new storelocation('midgard')
};

function storelocation(n) {
    this.id = null;
    this.name = n;
    this.orders = [];
}

module.exports = {}
export {storelocations}; 

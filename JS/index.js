let User = require('./user');
let express = require('express');
let app = express();
let nunjucks = require('nunjucks');
let port = 8080; 

nunjucks.configure({
autoescape: true,
express: app,
});

app.use(express.static('./'));

app.get('/', function (req, res){
  res.render('homepage.html');
});

app.listen(port, function () {
  console.log('server is up');
}); 

let crust = [
    { text: 'selectcrust', value: 'none' },
    { text: 'housestyle', value: 'hst' },
    { text: 'thincrust', value: 'tc' },
    { text: 'pretzelcrust', value: 'pc' },
    { text: 'deepdish', value: 'dd' },
    { text: 'newyorkstyle', value: 'nys' },
  ];
  
  let storelocations = [
    { text: 'selectlocation', value: 'none' },
    { text: 'helheimstreet', value: 'hs' },
    { text: 'alfheimstreet', value: 'as' },
    { text: 'jotunheimstreet', value: 'js' },
    { text: 'midgard', value: 'mg' }
  ];
  
  let sizes = [
    { text: 'Small', value: 'sm' },
    { text: 'Medium', value: 'md' },
    { text: 'Large', value: 'lg' },
  ];
  
  let toppings = [
    { text: 'pepperoni', value: 'pe' },
    { text: 'mushrooms', value: 'mu' },
    { text: 'pineapple', value: 'pi' },
    { text: 'bellpepper', value: 'bp' },
    { text: 'onions', value: 'on' },
    { text: 'chicken', value: 'ch' },
  ];

createUser('Ciel', 'UT')
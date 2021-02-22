const Cruise = require('./cruise');
const Customer = require('./customer');

const dubai = new Cruise('1.1.2022', '9.1.2022', 'Dubai');
const mojca = new Customer('Mojca', 'Colnik', 26-11-1992, 12, 1, 912837189129);

mojca.bookCruise(dubai);
mojca.signUp('secret password');
console.log(dubai);

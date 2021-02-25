const Cruise = require('../src/models/cruise');
const Customer = require('../src/models/customer');
const { searchCruises, offerDiscount } = require('../src/models/search-cruise');

//resolve promise
searchCruises('Blues of the Sea')
    .then((value) => console.log(value), (err) => console.log(err));

//reject promise
searchCruises('Rock cruise')
    .then((value) => console.log(value)).catch((err) => console.log(err));

//practicing chaining another promise
searchCruises('River Cruise')
    .then(result => {
        offerDiscount(result)
    })
    .then(err => console.log(err))


const dubai = new Cruise('1.1.2022', '9.1.2022', 'Dubai');
const mojca = new Customer('Mojca', 'Colnik', 26-11-1992, 12, 1, 912837189129);

mojca.bookCruise(dubai);
mojca.signUp('secret password');
console.log(dubai);

const express = require('express');
const { user } = require('../database-connection');
const router = express.Router();

const Cruise = require('../models/cruise');
const Customer = require('../models/customer');

// const customers = [
//   Customer.create({
//     fullName: 'Mojca Colnik',
//     birthDate: 26-11-1992,
//     accountNumber: 1111-2222-3333-4444,
//     profileAccount: false
//   }),
//   Customer.create({
//     fullName: 'Sandra Colnik',
//     birthDate: 25-08-1982,
//     accountNumber: 4444-5555-6666-7777,
//     profileAccount: true
//   })
// ]

/* GET users listing. */
router.get('/initialize', async (req, res) => {
  const mojca = new Customer({ name : 'mojca', age: 28, email: 'mojca@mojca.si' })
  await mojca.setPassword('test')
  await mojca.save()

  const sandra = new Customer({ name: 'sandra', age: 35, email: 'sandra@sandra.si' })
  await sandra.setPassword('test2')
  await sandra.save()
})

router.get('/users/:profileId', async function(req, res, next) {
  const customer = await customers.findById(req.params.profileId) 
  if (customer) res.render('customer', {customer})
  else {
    console.log('Please sign up first!');
    res.sendStatus(404);
}
}
)

module.exports = router;

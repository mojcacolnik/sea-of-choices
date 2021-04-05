const express = require('express')
const { user } = require('../database-connection')
const router = express.Router()

const Cruise = require('../models/cruise')
const Customer = require('../models/customer')

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

router.get('/', async (req, res) => {
  const users = await Customer.find({})
  res.send(users)
})

router.get('/:profileId', async (req, res) => {
  const user = await Customer.findById(req.params.profileId)
  if (user) res.send(user)
  else {
    console.log('Please sign up first!')
    res.sendStatus(404)
  }
})

module.exports = router

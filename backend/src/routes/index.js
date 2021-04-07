const express = require('express')
const router = express.Router()

const Cruise = require('../models/cruise')
const Customer = require('../models/customer')

/* GET home page. */
// router.get('/', async (req, res, next) => {
//   const cruises = await Cruise.find({})
//   res.send(cruises)
// })

router.get('/initialize', async (req, res) => {
  const mojca = new Customer({ name: 'mojca', birthDate: Date.now(), email: 'mojca@mojca.si' })
  await mojca.setPassword('test')
  await mojca.save()

  const sandra = new Customer({ name: 'sandra', birthDate: Date.now(), email: 'sandra@sandra.si' })
  await sandra.setPassword('test2')
  await sandra.save()

  const cruiseOne = Cruise.create({
    title: 'Mediteran',
    startDate: new Date('12-04-2022'),
    endDate: new Date('9-04-2022'),
    route: ['Genova', 'Mallorca', 'Barcelona'],
    guests: [],
    vacancy: true,
  })
  const cruiseTwo = Cruise.create({
    title: 'Southern',
    startDate: new Date('11-26-2021'),
    endDate: new Date('12-30-2021'),
    route: ['Venice', 'Qatar', 'Santorini'],
    guests: [],
    vacancy: true,
  })
  const cruiseThree = Cruise.create({
    title: 'Tropic',
    startDate: new Date('3-3-2022'),
    endDate: new Date('4-3-2022'),
    route: ['Miami', 'Hawaii'],
    guests: [],
    vacancy: true,
  })

  mojca.book(cruiseOne)
  sandra.book(cruiseTwo)
  mojca.book(cruiseThree)

  res.sendStatus(200)
})

// router.get('/search-cruises', async (req, res) => {
//   // console.log('Query string', req.query)
//   const cruises = await Cruise.find({})
//   //console.log('Cruises', cruises)
//   res.send(cruises)
// })

// router.get('/about-us', (req, res) => {
//   res.render('about-us')
// })

module.exports = router

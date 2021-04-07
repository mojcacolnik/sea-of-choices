const express = require('express')
const router = express.Router()

const Cruise = require('../models/cruise')
const Customer = require('../models/customer')
const Ship = require('../models/ship')

router.get('/initialize', async (req, res) => {
  try {
    const mojca = new Customer({ name: 'mojca', birthDate: Date.now(), email: 'mojca@mojca.si' })
    await mojca.setPassword('test')
    await mojca.save()

    const sandra = new Customer({ name: 'sandra', birthDate: Date.now(), email: 'sandra@sandra.si' })
    await sandra.setPassword('test2')
    await sandra.save()

    const cruiseOne = await Cruise.create({
      title: 'Mediteran',
      startDate: new Date('12-04-2022'),
      endDate: new Date('9-04-2022'),
      route: ['Genova', 'Mallorca', 'Barcelona'],
      guests: [],
      vacancy: true,
    })
    const cruiseTwo = await Cruise.create({
      title: 'Southern',
      startDate: new Date('11-26-2021'),
      endDate: new Date('12-30-2021'),
      route: ['Venice', 'Qatar', 'Santorini'],
      guests: [],
      vacancy: true,
    })
    const cruiseThree = await Cruise.create({
      title: 'Tropic',
      startDate: new Date('3-3-2022'),
      endDate: new Date('4-3-2022'),
      route: ['Miami', 'Hawaii'],
      guests: [],
      vacancy: true,
    })

    const harmony = await Ship.create({
      cruiseline: 'AAA',
      name: 'Harmony',
      year: 2015,
      capacity: 5000,
      cruisesCompleted: [],
    })
    const symphony = await Ship.create({
      cruiseline: 'BBB',
      name: 'Symphony',
      year: 2012,
      capacity: 4000,
      cruisesCompleted: [],
    })
    const rhapsody = await Ship.create({
      cruiseline: 'CCC',
      name: 'Rhapsody',
      year: 2019,
      capacity: 8000,
      cruisesCompleted: [],
    })

    await mojca.book(cruiseOne)
    await sandra.book(cruiseTwo)
    await mojca.book(cruiseThree)

    await harmony.sail(cruiseOne)
    await symphony.sail(cruiseTwo)
    await rhapsody.sail(cruiseThree)

    res.sendStatus(200)
  } catch(e) {
    console.error(e.message)
  }
})

module.exports = router

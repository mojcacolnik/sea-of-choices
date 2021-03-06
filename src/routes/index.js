const express = require('express');
const router = express.Router();

const Cruise = require('../models/cruise');
const Customer = require('../models/customer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wanna feel free? Cruise with me!' });
});

const mockCruises = [
  Cruise.create({
    startDate: new Date('12-04-2022'),
    endDate: new Date('9-04-2022'),
    route: ['Genova', 'Mallorca', 'Barcelona'],
    guests: [],
    vacancy: true
  }),
  Cruise.create({
    startDate: new Date('11-26-2021'),
    endDate: new Date('12-30-2021'),
    route: ['Venice', 'Qatar', 'Santorini'],
    guests: [],
    vacancy: true
  }),
  Cruise.create({
    startDate: new Date('3-3-2022'),
    endDate: new Date('4-3-2022'),
    route: ['Miami', 'Hawaii'],
    guests: [],
    vacancy: true
  })
]

router.get('/search-cruises', async(req, res) => {
  console.log('Query string', req.query)
  const cruises = await Cruise.find({})
  //console.log('Cruises', cruises)
  res.render('search-cruises', { cruises })
})

module.exports = router;

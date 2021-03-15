const express = require('express');
const router = express.Router();

const Cruise = require('../models/cruise');
const Customer = require('../models/customer');

router.get('/', async (req, res) => {
    const cruises = await Cruise.find({})
    res.send(cruises)
})

router.get('/:id', async (req, res) => {
    const cruise = await Cruise.findById(req.params.id)
    res.send(cruise)
})


module.exports = router;
const express = require('express');
const Ship = require('../models/ship');
const router = express.Router();

router.get('/', async (req, res) => {
    const ships = await Ship.find({})
    res.send(ships)
})

router.get('/:id', async (req, res) => {
    const ship = await Ship.findById(req.params.id)
    res.send(ship)
})

module.exports = router;
const express = require('express')
const { user } = require('../database-connection')
const router = express.Router()
const { celebrate, Joi, errors, Segments } = require('celebrate')

const Cruise = require('../models/cruise')
const Customer = require('../models/customer')

/* GET user listings with celebrate validation*/
router.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      name: Joi.string(),
      birthDate: Joi.date(),
    },
  }),
  async (req, res) => {
    const query = {}

    if (req.query.name) {
      query.name = req.query.name
    }

    if (req.query.birthDate) {
      query.birthDate = req.query.birthDate
    }

    res.send(await Customer.find(query))
  }
)

/* POST, create a user with celebrate validation */

router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birthDate: Joi.date().required(),
      email: Joi.string().required(),
    },
  }),
  async (req, res) => {
    const userToCreate = {
      name: req.body.name,
      birthDate: req.body.birthDate,
      email: req.body.email,
    }

    const createdUser = await Customer.create(userToCreate)
    res.send(createdUser)
  }
)

router.get('/:profileId', async (req, res) => {
  const user = await Customer.findById(req.params.profileId)
  if (user) res.send(user)
  else res.sendStatus(404)
})

router.post('/:profileId/books', async (req, res) => {
  const cruise = await Cruise.findById(req.body.id)
  const user = await Customer.findById(req.params.profileId)

  await user.book(cruise)
  res.sendStatus(200)
})

router.get('/:profileId/json', async (req, res) => {
  const user = await Customer.findById(req.params.profileId)
  res.send(user)
})

module.exports = router

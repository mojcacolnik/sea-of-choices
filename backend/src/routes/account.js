const express = require('express')
const passport = require('passport')

const router = express.Router()

const Customer = require('../models/customer')

router.get('/session', (req, res) => {
  console.log('user', req.user)
  res.send(req.user)
})

router.post('/', async (req, res) => {
  const { name, birthDate, email, password } = req.body

  const user = new Customer({ name, birthDate, email })
  await user.setPassword(password)
  await user.save()

  return user
})

router.post('/', async (req, res, next) => {
  const { name, address, email, password } = req.body
  console.log("register 1", req.body)
  try {
    const user = await User.register({ name, address, email }, password)
console.log("register 2", user)
    res.send(user)
  } catch (e) {
    console.log("register error", e)
    next(e)
  }
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', async (req, res) => {
  await req.logout()

  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router

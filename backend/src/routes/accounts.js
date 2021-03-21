const express = require('express');
const router = express.Router();
const passport = require('passport')

const Cruise = require('../models/cruise');
const Customer = require('../models/customer');

/* GET home page. */
router.get('/session', function(req, res, next) {
  res.send(req.session)
});

router.post('/', async (req, res) => {
  const userToCreate = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email
  }
  const user = new Customer(userToCreate)
  await user.setPassword(req.body.password)
  await user.save()

  return user
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async(req, res) => {
  res.send(req.user)
})

router.delete('/session', (req, res) => {
  req.logout()
  res.send(true)
})

module.exports = router;
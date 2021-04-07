const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const cruise = require('./cruise')
const passportLocalMongoose = require('passport-local-mongoose')

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
    },
    cruises: {
      type: Array,
    },
    profileAccount: Boolean,
  },
  { timestamps: true }
)

class Customer {
  async book(cruise) {
    if (cruise.vacancy) {
      cruise.guests.push(this)
      this.cruises.push(cruise)

      await this.save()
      await cruise.save()
    } else {
      throw new Error(`Cruise ${cruise} is sold out`)
    }
  }
}

customerSchema.loadClass(Customer)
customerSchema.plugin(autopopulate)
customerSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('Customer', customerSchema)

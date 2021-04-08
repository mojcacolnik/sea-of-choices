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
    cruises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cruise',
        autopopulate: { maxDepth: 2 },
      },
    ],
    profileAccount: Boolean,
  },
  { timestamps: true }
)

class Customer {
  async book(cruise) {
    try {
      if (cruise.vacancy) {
        cruise.guests.push(this)
        this.cruises.push(cruise)

        await this.save()
        await cruise.save()
      }
    } catch (e) {
      throw e(`Cruise ${cruise.title} is sold out`)
    }
  }
}

customerSchema.loadClass(Customer)
customerSchema.plugin(autopopulate)
customerSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('Customer', customerSchema)

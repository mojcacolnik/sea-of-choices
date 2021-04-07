const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Cruise = require('./cruise')
const passportLocalMongoose = require('passport-local-mongoose')

const shipSchema = new mongoose.Schema(
  {
    cruiseline: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
    },
    cruisesCompleted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cruise',
        autopopulate: { maxDepth: 2 },
      },
    ],
  },
  { timestamps: true }
)

class Ship {
  async sail(cruise) {
    await this.cruisesCompleted.push(cruise)
    console.log('hello')

    await this.save()
    console.log('hihi')
  }
}

shipSchema.loadClass(Ship)
shipSchema.plugin(autopopulate)
shipSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Ship', shipSchema)

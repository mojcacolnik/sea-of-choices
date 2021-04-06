const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const cruiseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    route: [
        {
            type: String,
        }
    ],
    guests: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            autopopulate: { maxDepth: 2 }
        }
    ],
    vacancy: Boolean
});

class Cruise {

 }


cruiseSchema.loadClass(Cruise);
cruiseSchema.plugin(autopopulate);

module.exports = mongoose.model('Cruise', cruiseSchema);
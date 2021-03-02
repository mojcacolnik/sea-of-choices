const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const cruiseSchema = new mongoose.Schema({
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
            type: Array,
        }
    ],
    passengers: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Customer', 
            autopopulate: true,
        }
    ],
    vacancy: Boolean
});

class Cruise {
    searchAvailableCruises(startDate, endDate, route) {
        if (!this.vacancy ) return `Sorry, the cruise is sold out.`
        this.vacancy = false; 
        return `Listing availiable cruises from ${startDate} to ${endDate} in ${route} route.`
    }
 }
    

cruiseSchema.loadClass(Cruise);
cruiseSchema.plugin(autopopulate);

module.exports = mongoose.model('Cruise', cruiseSchema);
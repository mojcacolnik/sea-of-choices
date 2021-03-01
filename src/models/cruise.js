/*class Cruise {
    constructor(startDate, endDate, route) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.route = route,
        this.passengers = [];
        this.vacancy = true;
    }
    searchAvailiableCruises(startDate, endDate, route) {
        if (this.vacancy) {
            this.vacancy = false;
            return `Listing availiable cruises from ${startDate} to ${endDate} in ${route} route.`
        } else {
            return `Sorry, the cruise is sold out.`
        }
    }
}

module.exports = Cruise; */

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
            type: mongoose.Schema.Types.ObjectId, ref: 'Customer'
        }
    ],
    vacancy: Boolean
});

cruiseSchema.methods.searchAvailiableCruises = (startDate, endDate, route) => {
    if (this.vacancy) {
        this.vacancy = false;
        return `Listing availiable cruises from ${startDate} to ${endDate} in ${route} route.`
    } else {
        return `Sorry, the cruise is sold out.`
    }
}

module.exports = mongoose.model('Cruise', cruiseSchema);
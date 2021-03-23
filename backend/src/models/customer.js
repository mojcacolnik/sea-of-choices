const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const cruise = require('./cruise');
const passportLocalMongoose = require('passport-local-mongoose');


const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Number,
        required: true,
    },
    accountNumber: {
        type: Number,

    },
    profileAccount: Boolean,
})

class Customer {
    async book(cruise) {
        const availableCruises = await Cruise.find(cruise)
        if (cruise.vacancy) {
          cruise.guests.push(this)
          await this.save()
          await cruise.save()
        } else {
            throw new Error(`Cruise ${cruise} is sold out`)
        }
     }

    async signUp(passphrase) {
        if (this.profileAccount == true) {
            throw new Error('You already have an account, log in instead')
        } else {
            let username = this.fullName;
            let password = passphrase;
            this.profileAccount = true;
            await this.save();
            return `Dear ${username}, welcome aboard!`
        }
    }
}



customerSchema.loadClass(Customer);
customerSchema.plugin(autopopulate);
customerSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
})

module.exports = mongoose.model('Customer', customerSchema);
const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const cruise = require('./cruise');


const customerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    accountNumber: {
        type: Number,
        required: true,
    },
    profileAccount: Boolean,
})

class Customer {
    async book(cruise) {
        if (cruise.vacancy) {
          cruise.passengers.push(this)
          await this.save()  
        } else {
            throw new Error(`Cruise ${cruise} is sold out`)
        }
        
        
    }
    async signUp(passphrase) {
        if (username == this.fullName) {
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

module.exports = mongoose.model('Customer', customerSchema);
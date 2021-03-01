/*class Customer {
    #idNumber = null;
    #cabinNumber = null;
    #accountNumber = null;

    constructor(name, surName, birthDate, idNumber, cabinNumber, accountNumber) {
        this.fullName = surName + ', ' + name;
        this.birthDate = birthDate;
        this.#idNumber = idNumber;
        this.#cabinNumber = cabinNumber;
        this.#accountNumber = accountNumber;
        this.profileAccount = false;
    }
    bookCruise(cruise) {
        cruise.passengers.push(this);
    }
    signUp(passphrase) {
        let username = this.fullName;
        let password = passphrase;
        this.profileAccount = true;
        return `Dear ${username}, welcome aboard!`
    }
}
//define private variables in advance because of Eslint

module.exports = Customer;*/

const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const customerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    idNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    accountNumber: {
        type: Number,
        required: true,
    },
    profileAccount: Boolean
});

customerSchema.methods.bookCruise = cruise => {
    cruise.passengers.push(this);
}

customerSchema.methods.signUp = (passphrase) => {
    let username = this.fullName;
    let password = passphrase;
    this.profileAccount = true;
    return `Dear ${username}, welcome aboard!`
}

module.exports = mongoose.model('Customer', customerSchema);
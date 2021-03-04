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
const cruise = require('./cruise');

//separating concerns with minimal leaking
/*const customer = {
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
}
const customerSchema = new mongoose.Schema(customer);*/

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


/*customerSchema.methods.bookCruise = cruise => {
    cruise.passengers.push(this);
}

customerSchema.methods.signUp = (passphrase) => {
    let username = this.fullName;
    let password = passphrase;
    this.profileAccount = true;
    return `Dear ${username}, welcome aboard!`
}*/

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
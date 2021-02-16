class Customer {
    constructor(name, surName, birthDate, idNumber, cabinNumber, accountNumber) {
        this.fullName = surName + ',' + name;
        this.birthDate = birthDate;
        this.#idNumber = idNumber;
        this.#cabinNumber = cabinNumber;
        this.#accountNumber = accountNumber
    }
    bookCruise(cruise) {
        cruise.passengers.push(this);
    }
}
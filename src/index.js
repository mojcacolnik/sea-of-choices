class Ship {
    constructor(name, year, currentPort, capacity) {
        this.name = name;
        this.year = year;
        this.currentPort = currentPort;
        this.capacity = capacity;
        this.route = [currentPort];
        this.passengers = [];
    }
    //fix counter; ...array.filter(item => item.condition < 10)
     //this.route.forEach(item => console.log(item))
    
    sailToNextPort() {
        let counter = 0;
        if (this.route.length === 1) {
                this.currentPort = this.route[counter];
            } else {
                counter++;
                this.currentPort = this.route[counter];
            }
        console.log(`${this.name} has dropped its anchor in ${this.currentPort}!`)
        }
    }
      
class Passenger {
    constructor(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    visitPort(ship, port) {
        ship.route.push(port);
        console.log(`${this.name} would like to visit ${port}`);
    }
    embarkShip(ship) {
        ship.passengers.push(this);
        console.log(`Dear ${this.name}, welcome aboard the ${ship.name}!`);
    }
    //figure out a way to pop the passenger object instance from passengers array
    leaveShip(ship) {
        ship.passengers = ship.passengers.filter((passenger) => passenger != this);
    }
} 

const ship1 = new Ship('Favolosa', 2020, 'Genova', 8000)
const ship2 = new Ship('Grandiosa', 2018, 'Venice', 5000)

const passenger1 = new Passenger('Mojca', 'xy street', 28);
const passenger2 = new Passenger('Max', 'zz street', 3);
const passenger3 = new Passenger('Sheila', 'qq street', 2); 

console.log(passenger2.embarkShip(ship1));
console.log(ship1.passengers);
console.log(passenger1.embarkShip(ship1));
console.log(passenger3.embarkShip(ship1));


console.log(passenger1.leaveShip(ship1));
console.log(ship1.passengers);
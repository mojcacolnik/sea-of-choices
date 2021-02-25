class Cruise {
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

module.exports = Cruise;
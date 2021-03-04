//simulating a database query
const availiableCruises = [
    {
        title: 'Blues of the Sea',
        time: 'April 2021',
        route: 'Medditerain'
    },
    {
        title: 'River Cruise',
        time: 'May 2021',
        route: 'Donnau'
    }
]


const searchCruises = (wantedCruiseTitle) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wantedCruiseTitle === availiableCruises.title) {
            resolve('Your cruise is ready to be booked')
        } else {
            reject('No available cruises with that title')
        }
        }, 3000);
         }
    )
}

const offerDisscount = (string) => {
    let arr = string.split('');
    return new Promise((resolve, reject) => {
       if (arr[0] == 'Y') {
        resolve(`Yay, you get 10% off`)
    } else {
        reject(`${string} :( Please choose another cruise`) 
    } 
  })
}

module.exports = { searchCruises, offerDisscount };
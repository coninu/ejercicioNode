const restator = (a,b) => {
    return a-b
}

module.exports = restator;


const getDate = () => {
    let moment = require('moment')
    let date = moment().format('DD/MM/YYYY')
    console.log(date)
}

module.exports = getDate;

const db = require('./connection')

function getAllCounsellors () {
    return db('Counsellors')
    .select()
}

module.exports = {
    getAllCounsellors,
}
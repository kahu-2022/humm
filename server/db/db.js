
// const config = require('./knexfile').development
// const database = require('knex')(config)
const db = require('./connection')

function getAllCounsellors () {
    return db('Counsellors')
    .select()
}

function getActivities () {
  return db('activities')
      .select()
}

// function confirmBooking () {
//     return db('counsellors')
//     .insert()
// }

module.exports = {
    getAllCounsellors,
    getActivities,
}

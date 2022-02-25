
const config = require('./knexfile').development
const database = require('knex')(config)
const db = require('./connection')

function getAllCounsellors () {
    return db('Counsellors')
    .select()
}

function getActivities () {
  return db('activities')
      .select()
}

function getCounsellingBookings () {
    return db('appointments')
        .select()
  }
  
function addCounsellingBooking (booking) {
    return db('appointments')
    .insert(booking)
}

module.exports = {
    addCounsellingBooking,
    getCounsellingBookings,
    getAllCounsellors,
    getActivities,
}


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
    return db('counsellors')
        .select()
  }
  
function addCounsellingBooking (booking) {
   console.log("You have hit the db wooo")
    return db('counsellors')
    .insert(booking)
}

module.exports = {
    addCounsellingBooking,
    getCounsellingBookings,
    getAllCounsellors,
    getActivities,
}


const config = require('./knexfile').development
const conn = require('knex')(config)
const db = require('./connection')

function getAllCounsellors (db = conn) {
    return db('Counsellors')
    .select()
}

function getActivities (db = conn) {
  return db('activities')
      .select()
}

function getCounsellingBookings (db = conn) {
    return db('appointments')
        .select()
  }
  
function addCounsellingBooking (booking, db = conn) {
    return db('appointments')
    .insert(booking)
    .then ((id) => {
        return getCounsellingBookingById(id, db = conn)
    })
}

function getCounsellingBookingById(bookingId, db = conn){
    return db('appointments')
    .where('id', bookingId)
    .select()
}

module.exports = {
    addCounsellingBooking,
    getCounsellingBookings,
    getAllCounsellors,
    getActivities,
    getCounsellingBookingById
}

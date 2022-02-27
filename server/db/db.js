
const config = require('./knexfile').development
const conn = require('knex')(config)

// counselling functions

function getAllCounsellors (db = conn) {
    return db('Counsellors')
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

function getSessions (db = conn) {
    return db('group-therapy')
    .select()
}

// activities functions

function getActivities (db = conn) {
    return db('activities')
    .select()
}

function addActivities (activity, db = conn) {
    return db('activities')
    .insert(activity)
}

// add suggestion function

function getSuggestions(suggestion, db = conn) {
    return db('suggestions')
    .select()
}

function getSuggestionById(suggestionId, db = conn) {
    return db('suggestions')
    .where('id', suggestionId)
    .select()
}

function addSuggestion(suggestion, db = conn) {
    return db('suggestions')
    .insert(suggestion)
    .then ((id) => {
        return getSuggestionById(id, db = conn)
    })
}

// room issue functions

function getRoomIssues(issue, db = conn) {
  return db('room-issues')
  .select()
}

function getRoomIssueById(issueId, db = conn){
  return db('room-issues')
  .where('id', issueId)
  .select()
}

function addRoomIssues(issue, db = conn) {
  return db('room-issues')
  .insert(issue)
  .then ((id) => {
      return getRoomIssueById(id, db = conn)
  })
}

// food functions

function getFood (db = conn) {
  return db('food-items')
  .select()
}

function getFoodById(foodId, db = conn){
  return db('food-items')
  .where('id', foodId)
  .select()
}

function addFood (food, db = conn) {
  return db('food-items')
  .insert(food)
  .then ((id) => {
      return getFoodById(id)
  })
}

// volunteer functions

function getVolunteering (db = conn) {
  return db('volunteering')
  .select()
}

// function getActivities (db = conn) {
//   return db('activities')
//   .select()
// }

// exports

module.exports = {
    addCounsellingBooking,
    getCounsellingBookings,
    getAllCounsellors,
    getCounsellingBookingById,
    getSessions,
    getActivities,
    addActivities,
    getSuggestions,
    getSuggestionById,
    addSuggestion,
    getRoomIssues,
    getRoomIssueById,
    addRoomIssues,
    getFood,
    getFoodById,
    addFood,
    getVolunteering
}

const config = require('./knexfile').development
const conn = require('knex')(config)

function getAllCounsellors(db = conn) {
  return db('Counsellors').select()
}

function getCounsellingBookings(db = conn) {
  return db('appointments').select()
}

function addCounsellingBooking(booking, db = conn) {
  return db('appointments')
    .insert(booking)
    .then((id) => {
      return getCounsellingBookingById(id, (db = conn))
    })
}

function getCounsellingBookingById(bookingId, db = conn) {
  return db('appointments').where('id', bookingId).select()
}

function getSessions(db = conn) {
  return db('group-therapy').select()
}

function getActivities(db = conn) {
  return db('activities').select()
}

function addActivities(activity, db = conn) {
  return db('activities').insert(activity)
}

function getSuggestions(suggestion, db = conn) {
  return db('suggestions').select()
}

function getSuggestionById(suggestionId, db = conn) {
  return db('suggestions').where('id', suggestionId).select()
}

function addSuggestion(suggestion, db = conn) {
  return db('suggestions')
    .insert(suggestion)
    .then((id) => {
      return getSuggestionById(id, (db = conn))
    })
}

function getRoomIssues(issue, db = conn) {
  return db('room-issues').select()
}

function getRoomIssueById(issueId, db = conn) {
  return db('room-issues').where('id', issueId).select()
}

function addRoomIssues(issue, db = conn) {
  return db('room-issues')
    .insert(issue)
    .then((id) => {
      return getRoomIssueById(id, (db = conn))
    })
}

function getFood(db = conn) {
  return db('food-items').select().orderBy('donateDate', 'desc')
}

function getFoodById(foodId, db = conn) {
  return db('food-items').where('id', foodId).select()
}

function addFood(food, db = conn) {
  return db('food-items')
    .insert(food)
    .then((id) => {
      return getFoodById(id)
    })
}

function claimFood(food, db = conn) {
  return db('food-items')
    .update(food)
    .where('id', food.id)
    .then((count) => {
      return getFoodById(food.id)
    })
}

function getVolunteering(db = conn) {
  return db('volunteering').select()
}

function getVolunteeringBookingById(bookingId, db = conn) {
  return db('volunteering').where('id', bookingId).select()
}

function getVolunteers(db = conn) {
  return db('volunteers').select()
}

function signUpForVolunteering(booking, db = conn) {
  return db('volunteers')
    .insert(booking)
    .then((id) => {
      return getVolunteersById(id)
    })
}

function getVolunteersById(id, db = conn) {
  return db('volunteers').where('id', id).select()
}

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
  getVolunteering,
  claimFood,
  signUpForVolunteering,
  getVolunteers,
  getVolunteeringBookingById,
  getVolunteersById,
}

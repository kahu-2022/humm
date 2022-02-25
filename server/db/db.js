
// const config = require('./knexfile').development
// const database = require('knex')(config)
const db = require('./connection')

// counsellors

function getAllCounsellors () {
    return db('Counsellors')
    .select()
}

// group therapy

function getSessions () {
    return db('group-therapy')
    .select()
}

// activities

function getActivities () {
  return db('activities')
      .select()
}

function addActivities (activity) {
    return db('activities')
    .insert(activity)
}

// exports

module.exports = {
    getAllCounsellors,
    getActivities,
    addActivities,
    getSessions
}

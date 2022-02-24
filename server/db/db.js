const config = require('./knexfile').development
const database = require('knex')(config)

function getActivities (db = database) {
  return db('activities')
      .select()
}

module.exports = {
    getActivities,
  }
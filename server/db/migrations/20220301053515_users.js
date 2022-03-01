exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.string('pronouns')
      table.string('roomNumber')
      table.string('contactDetails')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users')
  }
  

exports.up = function(knex) {
  return knex.schema.createTable('volunteers', (table) => {
      table.increments('id')
      table.string('name')
      table.string('pronouns')
      table.string('roomNumber')
      table.integer('volunteeringId')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('volunteers')
};  
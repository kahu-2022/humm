
exports.up = function(knex) {
    return knex.schema.createTable('appointments', (table) => {
        table.increments('id')
        table.string('name')
        table.string('pronouns')
        table.string('roomNumber')
        table.string('urgency')
        table.string('date')
        table.string('time')
        table.string('sessionPreference')
        table.string('contactPreference')
        table.string('contactDetails')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('appointments')
};
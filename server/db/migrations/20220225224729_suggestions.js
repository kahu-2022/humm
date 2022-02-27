
exports.up = function(knex) {
    return knex.schema.createTable('suggestions', (table) => {
        table.increments('id')
        table.string('name')
        table.string('pronouns')
        table.string('roomNumber')
        table.string('suggestion')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('suggestions')
};

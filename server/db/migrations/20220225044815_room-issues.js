
exports.up = function(knex) {
    return knex.schema.createTable('room-issues', (table) => {
        table.increments('id')
        table.string('name')
        table.string('pronouns')
        table.string('roomNumber')
        table.string('issue')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('room-issues')
};

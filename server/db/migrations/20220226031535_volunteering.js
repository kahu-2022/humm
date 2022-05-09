exports.up = function (knex) {
  return knex.schema.createTable('volunteering', (table) => {
    table.increments('id')
    table.string('title')
    table.string('description')
    table.string('when')
    table.string('where')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('volunteering')
}

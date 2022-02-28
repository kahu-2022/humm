exports.up = function (knex) {
  return knex.schema.createTable('group-therapy', (table) => {
    table.increments('id')
    table.string('title')
    table.string('category')
    table.string('info')
    table.string('date')
    table.string('time')
    table.string('location')
    table.boolean('recurring')
    table.string('frequency')
    table.string('image')
    table.string('ran_by')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('group-therapy')
}

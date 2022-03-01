exports.up = (knex) => {
  return knex.schema.createTable('counsellors', (table) => {
    table.increments('id')
    table.string('name')
    table.string('pronouns')
    table.string('speciality')
    table.string('photo')
    table.string('hours')
    table.string('biography')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('counsellors')
}

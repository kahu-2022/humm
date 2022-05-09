exports.up = function (knex) {
  return knex.schema.createTable('food-items', (table) => {
    table.increments('id')
    table.string('name')
    table.string('donorRoom')
    table.string('item')
    table.string('quantity')
    table.string('type')
    table.date('donateDate')
    table.date('useByDate')
    table.string('status')
    table.string('claimedBy')
    table.string('claimerRoom')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('food-items')
}

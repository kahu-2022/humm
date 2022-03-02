exports.up = function (knex) {
    return knex.schema.createTable('free-items', (table) => {
      table.increments('id')
      table.string('name')
      table.string('donorRoom')
      table.string('item')
      table.string('description')
      table.string('quantity')
      table.string('category')
      table.date('donateDate')
      table.date('useByDate')
      table.string('status')
      table.string('claimedBy')
      table.string('claimerRoom')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('free-items')
  }
  
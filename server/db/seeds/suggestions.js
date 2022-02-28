exports.seed = function (knex) {
  return knex('suggestions')
    .del()
    .then(function () {
      return knex('suggestions').insert([
        { id: 1, name: '', pronouns: '', roomNumber: '', suggestion: '' },
      ])
    })
}

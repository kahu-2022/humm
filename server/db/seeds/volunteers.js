exports.seed = function (knex) {
  return knex('volunteers')
    .del()
    .then(function () {
      return knex('volunteers').insert([
        { id: 1, name: '', pronouns: '', roomNumber: '', volunteeringId: '' },
      ])
    })
}

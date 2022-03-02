exports.seed = function(knex) {
  return knex('engagements')
  .del()
  .then(function () {
  return knex('engagements').insert([
    {
      id: 1,
      name: 'Jane Barker',
      pronouns: 'she/her',
      roomNumber: '1',
      contactDetails: '0212345326',
     }
    ])
  })
}
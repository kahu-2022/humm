exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          name: 'Rose Baylis',
          email: 'rose.b@email.com',
          pronouns: 'she/her',
          roomNumber: '203',
          contactDetails: '02012234532',
        }
      ])
    })
}

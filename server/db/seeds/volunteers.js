exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {id: 1, name: '', pronouns: '', roomNumber: '', volunteeringId: ''}
      ]);
    });
};

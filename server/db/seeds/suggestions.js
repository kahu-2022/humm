
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('suggestions').del()
    .then(function () {
      // Inserts seed entries
      return knex('suggestions').insert([
        {id: 1, name: '', pronouns: '', roomNumber: '', suggestion: ''},
      ]);
    });
};

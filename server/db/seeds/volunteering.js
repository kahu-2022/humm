exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('volunteering').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteering').insert([
        {id: 1, title: 'Kitchen Hand', description: 'Help out in the kitchen, prepare and serve daily meals', when: 'Monday afternoons', where: 'Communal Kitchen'},
        {id: 2, title: 'Garden Maintenance', description: 'Tend to our vegetables and fruit in the community garden', when: 'Fridays', where: 'Communal Garden'},
        {id: 3, title: 'Administration', description: 'Assist with day to day administration tasks', when: 'Wednesday', where: 'Main Office'}
      ]);
    });
};

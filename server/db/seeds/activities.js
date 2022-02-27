exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, title: 'Yoga', category: 'Health', info: 'a gentle vinyasa flow to start the day. suitable for all levels', date: 'every thursday at', time: '10am', location: 'blue room', recurring: true, frequency: 'weekly', image: './images/YOG.jpg', ran_by: 'Kaia',},
        {id: 2, title: 'Movie Night', category: 'Fun', info: 'something something cool movie something', date: '', time: '', location: 'green room', recurring: false, frequency: 'n/a', image: '', ran_by: 'Finn',},
        {id: 3, title: 'Te Reo Classes', category: 'Culture', info: 'Come along and learn te reo!', date: 'every monday at', time: '5pm', location: 'pink room', recurring: true, frequency: 'weekly', image: './images/te-reo.jpeg', ran_by: 'Isaiah',},
      ]);
    });
};


// exports.up = function(knex) {
//   return knex.schema.createTable('activities', (table) => {
//       table.increments('id')
//       table.string('title')
//       table.string('category')
//       table.string('info')
//       table.string('date')
//       table.string('time')
//       table.string('location')
//       table.boolean('recurring')
//       table.string('frequency')
//       table.string('image')
//       table.string('ran_by')
//     })
// };

// exports.down = function(knex) {
//   return knex.schema.dropTable('activities')
// };
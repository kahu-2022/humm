exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, title: 'Yoga', category: 'Health', info: 'A gentle Vinyāsa flow to start the day. suitable for all levels.', date: 'every Thursday at', time: '10am', location: 'Blue Room', recurring: true, frequency: 'weekly', image: '', ran_by: 'Kaia',},
        {id: 2, title: 'Movie Night', category: 'Fun', info: '.', date: 'Every Friday at', time: '7pm', location: 'Green Room', recurring: true, frequency: 'weekly', image: './images/MOV.jpeg', ran_by: 'Finn',},
        {id: 3, title: 'Te Reo Classes', category: 'Culture', info: 'Come along and learn Te Reo!', date: 'every Monday at', time: '5pm', location: 'Pink Room', recurring: true, frequency: 'weekly', image: './images/REO.jpeg', ran_by: 'Isaiah',},
        {id: 4, title: 'Cooking Classes', category: 'Cuisine', info: 'Learn some quick, easy, tasty recipes from a variety of cultures.', date: 'Every Wednesday at', time: '5pm', location: 'Blue Room', recurring: true, frequency: 'weekly', image: './images/COO.webp', ran_by: 'Courtney',},
        {id: 5, title: 'Book Club', category: 'Fun', info: 'Calling all book lovers! We read all genres, and share our views in a fun setting.', date: 'Every Tuesday at', time: '5pm', location: 'Green Room', recurring: true, frequency: 'weekly', image: './images/BOO.png', ran_by: 'Cujo',},
        {id: 6, title: 'Puppy Day', category: 'Fun', info: 'Puppy day! An all day play session with some lovable furry friends, make friends with some sweet pups that need some love and affection.', date: 'Saturday - 12/03/2022', time: '11am', location: 'Pink Room', recurring: false, frequency: '', image: './images/PUP.jpeg', ran_by: 'Dellon',}
      ]);
    });
};
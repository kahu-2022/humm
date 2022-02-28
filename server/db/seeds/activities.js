exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, title: 'Yoga', category: 'Health', info: 'A gentle Vinyāsa flow to start the day. Suitable for all levels.', date: 'Every Thursday at', time: '10am', location: 'the Blue Room', recurring: true, frequency: 'weekly', image: './images/YOG.jpg', ran_by: 'Kaia'},
        {id: 2, title: 'Movie Night', category: 'Fun', info: 'Are you a film lover? Come along and join our movie nights, cast your weekly vote and enjoy culturally significant movies together.', date: 'Every Friday at', time: '7pm', location: 'the Green Room', recurring: true, frequency: 'weekly', image: './images/MOV.jpeg', ran_by: 'Finn'},
        {id: 3, title: 'Te Reo Classes', category: 'Culture', info: 'Come along and learn Te Reo!', date: 'Every Monday at', time: '5pm', location: 'the Pink Room', recurring: true, frequency: 'weekly', image: './images/REO.jpeg', ran_by: 'Isaiah'},
        {id: 4, title: 'Cooking Classes', category: 'Cuisine', info: 'Learn some quick, easy, tasty recipes from a variety of cultures.', date: 'Every Wednesday at', time: '5pm', location: 'the Blue Room', recurring: true, frequency: 'weekly', image: './images/COO.webp', ran_by: 'Courtney'},
        {id: 5, title: 'Book Club', category: 'Fun', info: 'Calling all book lovers! We read all genres, and share our views in a fun setting.', date: 'Every Tuesday at', time: '5pm', location: 'the Green Room', recurring: true, frequency: 'weekly', image: './images/BOO.png', ran_by: 'Cujo'},
        {id: 6, title: 'Puppy Day', category: 'Fun', info: 'Puppy day! An all day play session with some lovable furry friends.', date: 'Saturday - 12/03/2022', time: '11am', location: 'the Pink Room', recurring: false, frequency: '', image: './images/PUP.jpeg', ran_by: 'Dellon'},
        {id: 7, title: 'Poetry Reading', category: 'Fun', info: 'Why not try poetry? Weekly readings of poetry chosen in advance.', date: 'Sunday', time: '11am', location: 'the Blue Room', recurring: true, frequency: 'weekly', image: './images/POE.jpeg', ran_by: 'Courtney'}
      ]);
    });
};
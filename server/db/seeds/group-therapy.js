exports.seed = function (knex) {
  return knex('group-therapy')
    .del()
    .then(function () {
      return knex('group-therapy').insert([
        {
          id: 1,
          title: 'D.B.T.',
          category: 'Therapy',
          info: 'The main goals of DBT (Dialectical Behavior Therapy) are to teach people how to live in the moment, develop healthy ways to cope with stress, and improve their relationships with others.',
          date: 'Every second Tuesday at ',
          time: '1pm',
          location: 'Blue Room',
          recurring: true,
          frequency: 'fortnightly',
          image: './images/group-therapy/ripple.jpg',
          ran_by: 'Kaia',
        },
        {
          id: 2,
          title: 'N.A.',
          category: 'Recovery',
          info: 'If using drugs is causing problems in your life NA (Narcotics Anonymous) can help. NA is made up of addicts who are helping each other recover from using drugs and make changes in their lives.',
          date: 'Every Friday at ',
          time: '11am',
          location: 'Green Room',
          recurring: true,
          frequency: 'weekly',
          image: './images/group-therapy/tree.jpg',
          ran_by: 'Finn',
        },
        {
          id: 3,
          title: 'Letting Go of the Past',
          category: 'Mindfulness',
          info: 'A half-hour meditation focussed on acknowledging and letting go of grief and regret, finding gratitude in the present, and building a more peaceful future. Followed with kai and a kōrero.',
          date: 'Friday March 11 at ',
          time: '5pm',
          location: 'Pink Room',
          recurring: false,
          frequency: 'n/a',
          image: './images/group-therapy/lavender.jpg',
          ran_by: 'Isaiah',
        },
      ])
    })
}

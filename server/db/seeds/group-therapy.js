exports.seed = function (knex) {
  return knex('group-therapy')
    .del()
    .then(function () {
      return knex('group-therapy').insert([
        {
          id: 1,
          title: 'D.B.T.',
          category: 'Therapy',
          info: 'Dialectical behavior therapy (DBT) is a modified type of cognitive behavioral therapy (CBT). Its main goals are to teach people how to live in the moment, develop healthy ways to cope with stress, regulate their emotions, and improve their relationships with others.',
          date: 'every second tuesday at ',
          time: '1pm',
          location: 'blue room',
          recurring: true,
          frequency: 'fortnightly',
          image: '',
          ran_by: 'Kaia',
        },
        {
          id: 2,
          title: 'N.A.',
          category: 'Recovery',
          info: 'If using drugs is causing problems in your life NA (Narcotics Anonymous) can help. NA is made up of addicts who are helping each other recover from using drugs and make changes in their lives.',
          date: 'every friday at ',
          time: '11am',
          location: 'green room',
          recurring: true,
          frequency: 'weekly',
          image: '',
          ran_by: 'Finn',
        },
        {
          id: 3,
          title: 'Letting Go of the Past',
          category: 'Mindfulness',
          info: 'A kōrero and meditation focussed on acknowledging and letting go of grief and regret, finding gratitude in the present and building a more peaceful future.',
          date: 'March 12',
          time: '5pm',
          location: 'pink room',
          recurring: false,
          frequency: 'n/a',
          image: '',
          ran_by: 'Isaiah',
        },
      ])
    })
}

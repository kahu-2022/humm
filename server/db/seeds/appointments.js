exports.seed = function (knex) {
    return knex('appointments')
      .del()
      .then(function () {
        return knex('appointments').insert([
          {
            id: 1,
            name: 'Jane Barker',
            pronouns: 'she/her',
            roomNumber: '1',
            preferredCounsellor: 'Courtney Brown',
            urgency: 'Today',
            date: '2022-03-01',
            time: '9 am-10 am',
            sessionPreference: 'Face to face',
            contactPreference: 'Text',
            contactDetails: '0212345326',
          }
        ])
      })
  }
  
exports.seed = async function(knex) {
  await knex('food-items').del()
  await knex('food-items').insert([
    {id: 1, name: 'Friede', donorRoom: '1', item: 'Aubergine', quantity: '4', donateDate: '2022-02-20', useByDate: '2022-02-27', status:'Available', claimedBy: '', claimerRoom: ''},
    {id: 2, name: 'Logan', donorRoom: '3', item: 'Tomato', quantity: '12', donateDate: '2022-02-19', useByDate: '2022-02-26', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 3, name: 'Jade', donorRoom: '4', item: 'Watermelon', quantity: '8', donateDate: '2022-02-23', useByDate: '2022-03-02', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 4, name: 'Tyson', donorRoom: '6', item: 'Tangelo', quantity: '20', donateDate: '2022-02-25', useByDate: '2022-03-04', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 5, name: 'Anastacia', donorRoom: '8', item: 'Kumara', quantity: '8', donateDate: '2022-02-22', useByDate: '2022-03-01', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 6, name: 'Maria', donorRoom: '9', item: 'Brown rice', quantity: '2 X bags', donateDate: '2022-02-12', useByDate: '2022-02-19', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 7, name: 'Simon', donorRoom: '13', item: 'Kumquat', quantity: '5', donateDate: '2022-02-24', useByDate: '2022-03-03', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 8, name: 'Kevin', donorRoom: '19', item: 'Persimmon', quantity: '10', donateDate: '2022-02-24', useByDate: '2022-03-03', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 9, name: 'Cherie', donorRoom: '20', item: 'Raspberries', quantity: '3 X punnets', donateDate: '2022-02-25', useByDate: '2022-03-04', status: 'Available', claimedBy: '', claimerRoom: ''}
  ]);
};

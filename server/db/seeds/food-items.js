exports.seed = async function(knex) {
  await knex('counsellors').del()
  await knex('counsellors').insert([
    {id: 1, name: 'Friede', donorRoom: '1', item: 'Aubergine', quantity: '4', donateDate: '2022-02-20', useByDate: '2022-02-27', status: 'Claimed', claimedBy: 'Willem', claimerRoom: '2'},
    {id: 1, name: 'Logan', donorRoom: '3', item: 'Tomato', quantity: '12', donateDate: '2022-02-19', useByDate: '2022-02-26', status: 'Claimed', claimedBy: 'Maria', claimerRoom: '9'},
    {id: 1, name: 'Jade', donorRoom: '4', item: 'Watermelon', quantity: '8', donateDate: '2022-02-23', useByDate: '2022-03-02', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 1, name: 'Tyson', donorRoom: '6', item: 'Tangelo', quantity: '20', donateDate: '2022-02-25', useByDate: '2022-03-04', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 1, name: 'Anastacia', donorRoom: '8', item: 'Kumara', quantity: '8', donateDate: '2022-02-22', useByDate: '2022-03-01', status: 'Available', claimedBy: '', claimerRoom: ''},
    {id: 1, name: 'Maria', donorRoom: '9', item: 'Brown rice', quantity: '2 X bags', donateDate: '2022-02-12', useByDate: '2022-02-19', status: 'Claimed', claimedBy: 'Simon', claimerRoom: '13'},
    {id: 1, name: 'Simon', donorRoom: '13', item: 'Kumquat', quantity: '5', donateDate: '', useByDate: '2022-02-24', status: '2022-03-03', claimedBy: 'Available', claimerRoom: ''},
    {id: 1, name: 'Kevin', donorRoom: '19', item: 'Persimmon', quantity: '10', donateDate: '', useByDate: '2022-02-24', status: '2022-03-03', claimedBy: 'Available', claimerRoom: ''},
    {id: 1, name: 'Cherie', donorRoom: '20', item: 'Raspberries', quantity: '3 X punnets', donateDate: '2022-02-25', useByDate: '2022-03-04', status: 'Available', claimedBy: '', claimerRoom: ''}
  ]);
};

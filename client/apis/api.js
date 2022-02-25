import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// receive specials API:
// created Deals Table /db/migrations/...
// created Seed File deals.js with 15 items
// created function getDeals in /db/db.js
// created route /api/v1/deals in routes/deals.js, also defined in server.js

export function fetchActivities () {
    return request
    .get('/api/v1/activities')
    .then(res => {
        // console.log(res.body)
      return res.body
    })
    .catch(err => {
      console.error({error: err.message})
    })
  }


export function fetchCounsellors () {
    return request
    .get('api/v1/counsellors')
    .then(res => {
      console.log(res.body)
    })
    .catch(err => {
      console.error({error: err.message})
    })
}

export function fetchSessions () {
    return request
    .get('/api/v1/sessions')
    .then(res => {

      return res.body
    })
    .catch(err => {
      console.error({error: err.message})
    })

}
  

  


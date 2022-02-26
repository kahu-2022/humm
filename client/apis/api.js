import request from 'superagent'

export function fetchActivities () {
    return request
    .get('/api/v1/activities')
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.error({error: err.message})
    })
  }

export function addRoomIssue(issueObj){
  console.log("You have reached the api wooo", issueObj)
    return request.post('/api/v1/room')
    .send(issueObj)
    .then(newRoomIssue => { 
      return newRoomIssue.body
  })
}

export function addCounselling (bookingObj) {
    console.log("You have reached the api wooo", bookingObj)
    return request.post('/api/v1/counselling')
    .send(bookingObj)
    .then(newAppointment => { 
      return newAppointment.body
  })
}

export function fetchCounsellors () {
    return request
    .get('/api/v1/counsellors')
    .then(res => {
      return res.body
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


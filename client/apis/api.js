import request from 'superagent'

// counselling functions

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
  .get('api/v1/counsellors')
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

// activities functions

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

  export function addSuggestion(issueObj) {
    console.log('yeeee you reached the api', issueObj)
      return request.post('/api/v1/activities')
      .send(issueObj)
      .then(newSuggestion => {
        return newSuggestion.body
    })
  }

// room issues functions

export function addRoomIssue(issueObj){
  console.log("You have reached the api wooo", issueObj)
    return request.post('/api/v1/room')
    .send(issueObj)
    .then(newRoomIssue => { 
      return newRoomIssue.body
  })
}

export function fetchFood () {
  return request
  .get('/api/v1/food')
  .then(res => {
    return res.body
  })
  .catch(err => {
    console.error({error: err.message})
  })
}

export function fetchVolunteering () {
  return request
  .get('/api/v1/volunteering')
  .then(res => {
    return res.body
  })
  .catch(err => {
    console.error({error: err.message})
  })
}


export function addNewFood(foodObj){
  console.log("You have reached the api wooo", foodObj)
    return request.post('/api/v1/food')
    .send(foodObj)
    .then(newFoodAdded => { 
      return newFoodAdded.body
  })
}


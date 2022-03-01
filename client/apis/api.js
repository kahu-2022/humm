import request from 'superagent'

export function addUser(user) {
  return request
    .post('/api/v1/users')
    .send(user)
    .then((newUser) => {
      return newUser.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

export function updateUser(user) {
  ("updated data to the api", user)
  return request
    .patch(`/api/v1/users/${user.id}`)
    .send(user)
    .then((updatedUser) => {
      return updatedUser.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

export function getAllUsers() {
  return request
    .get('/api/v1/users')
    .then((users) => {
      return users.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}


export function getUserByEmail(email) {
  return request
    .get(`/api/v1/users/${email}`)
    .then((users) => {
      return users.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}


export function addCounselling(bookingObj) {
  return request
    .post('/api/v1/counselling')
    .send(bookingObj)
    .then((newAppointment) => {
      return newAppointment.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

export function fetchCounsellors() {
  return request
    .get('/api/v1/counsellors')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

export function fetchSessions() {
  return request
    .get('/api/v1/sessions')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

export function fetchActivities() {
  return request
    .get('/api/v1/activities')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

export function addSuggestion(issueObj) {
  return request
    .post('/api/v1/activities')
    .send(issueObj)
    .then((newSuggestion) => {
      return newSuggestion.body
    })
}

// room issues functions
export function addRoomIssue(issueObj) {
  return request
    .post('/api/v1/room')
    .send(issueObj)
    .then((newRoomIssue) => {
      return newRoomIssue.body
    })
}

export function fetchFood() {
  return request
    .get('/api/v1/food')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

export function addNewFood(foodObj) {
  return request
    .post('/api/v1/food')
    .send(foodObj)
    .then((newFoodAdded) => {
      return newFoodAdded.body
    })
}

export function claimNewFood(claimData) {
  return request
    .patch('/api/v1/food')
    .send(claimData)
    .then((claimedFoodAdded) => {
      return claimedFoodAdded.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

// volunteering functions
export function fetchVolunteering() {
  return request
    .get('/api/v1/volunteering')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

export function signUpForVolunteering(bookingObj) {
  return request
    .post('/api/v1/volunteers')
    .send(bookingObj)
    .then((volunteered) => {
      return volunteered.body
    })
    .catch((err) => {
      console.error({ error: err.message })
    })
}

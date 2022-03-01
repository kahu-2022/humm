import request from "superagent";

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const REQUEST_USER = 'REQUEST_USERS'
export const RECEIVE_USER = 'RECIEVE_USERS'

export function setUser (user) {
  console.log(user)
  return {
    type: SET_USER,
    user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}




//thunk
export function fetchUser(userEmail) {
  console.log(userEmail)
  return (dispatch) => {
    return request
      .get(`/api/v1/users/${userEmail}`)
      .then((res) => {
        console.log("in the thunk",res.body)
        dispatch(receiveUser(res.body[0]));
        return null;
      })
      .catch((err) => {
        // dispatch(showError(err.message));
      });
  };
}

export function receiveUser(user) {
  console.log("RECIEVE_USER dispatched", user)
  return {
    type: RECEIVE_USER,
    user
  };
}



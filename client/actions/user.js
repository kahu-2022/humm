export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'
export const REQUEST_USER = 'REQUEST_USERS'

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
export function fetchUser (user) {
  return (dispatch) => {
    return request
      .get(`/api/v1/users/${user.id}`)
      .then((res) => {
        dispatch(receiveUser(res.body));
        return null;
      })
      .catch((err) => {
        // dispatch(showError(err.message));
      });
  };
}

export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user
  };
}



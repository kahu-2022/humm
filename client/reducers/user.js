import { SET_USER, CLEAR_USER,RECEIVE_USER } from '../actions/user'

const emptyUser = {
  auth0Id: '',
  email: '',
  token: ''
}

export default function user (state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      state.user = action.user;
      return state

    case CLEAR_USER:
      return emptyUser

    case RECEIVE_USER:
      console.log("in reducer",action.user)
      state.user = action.user;
      return state
        
    default:
      return state
  }
}
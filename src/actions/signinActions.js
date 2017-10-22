import axios from 'axios';

export function userSignInRequest(data) {
  return dispatch => {
    return axios.post('/api/users', data)
  }
}
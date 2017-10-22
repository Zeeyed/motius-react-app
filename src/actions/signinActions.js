import axios from 'axios';
import setAuthTokenHeader from '../utils/setAuthTokenHeader';
import jwt from 'jsonwebtoken';

export function userSignInRequest(data) {
  return dispatch => {
    return axios.post('http://127.0.0.1:8000/api-token-auth/', data)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthTokenHeader(token);
      console.log(jwt.decode(token))
    })
  }
}
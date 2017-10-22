import axios from 'axios';
import setAuthTokenHeader from '../utils/setAuthTokenHeader';
import jwt from 'jsonwebtoken';
import { SET_USER } from './types';

export function userSignInRequest(data) {
  return dispatch => {
    return axios.post('http://127.0.0.1:8000/api-token-auth/', data)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthTokenHeader(token);
      dispatch(setUser(jwt.decode(token)))
    })
  }
}

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}
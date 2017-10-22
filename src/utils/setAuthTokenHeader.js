import axios from 'axios';

// Add headers to every request
export default function setAuthTokenHeader(token) {
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }else{
    delete axios.defaults.headers.common['Authorization'];
  }
}
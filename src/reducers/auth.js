import { SET_USER } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};
// action contains user object
export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default: return state;
  }
}
import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';

// combine in one state object
export default combineReducers({
  flashMessages,
  auth
});
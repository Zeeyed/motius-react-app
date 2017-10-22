import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';

// combine in one state object
export default combineReducers({
  flashMessages,
  // auth
});
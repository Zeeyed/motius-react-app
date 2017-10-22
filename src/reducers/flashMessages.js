import { ADD_FLASH_MSG } from '../actions/types';
import shortid from 'shortid';

export default (state = [], action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MSG:
    // return state : array
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ]
    default: return state;
  }
}
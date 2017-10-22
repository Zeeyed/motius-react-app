import { ADD_FLASH_MSG } from './types';

export function addFlashMessages(message) {
  return {
    type: ADD_FLASH_MSG,
    message
  }
}
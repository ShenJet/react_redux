import {SET_FILTER} from './actionTypes.js';
import {FilterTypes} from '../constants.js'

export const reducer = (state = FilterTypes.ALL, action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}

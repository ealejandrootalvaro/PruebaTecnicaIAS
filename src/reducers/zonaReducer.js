import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function zonaReducer( state = initialState.zonas, action) {

  switch (action.type) {
    case types.LOAD_ZONAS_SUCCESS:
      return action.zonas

    default:
      return state
  }

}

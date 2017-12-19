import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function aveReducer( state = initialState.aves, action) {

  switch(action.type) {
    case types.LOAD_AVES_SUCCESS:
      return action.aves

    case types.UPDATE_AVE_SUCCESS:
      return [
        ...state.filter(ave => ave.CDAVE !== action.ave.CDAVE),
        Object.assign({}, action.ave)
      ]

    case types.CREATE_AVE_SUCCESS:
      return [
        ...state.filter(ave => ave.CDAVE !== action.ave.CDAVE),
        Object.assign({}, action.ave)
      ]

    case types.DELETE_AVE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfAveToDelete = state.findIndex(ave => {
        return ave.CDAVE == action.ave.CDAVE
      });

      newState.splice(indexOfAveToDelete,1);

      return newState;

    }

    default:
      return state
  }

}

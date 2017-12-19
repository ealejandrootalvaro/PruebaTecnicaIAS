import * as types from './actionTypes'
import fetch from 'cross-fetch'
import aveApi from '../api/aveApi'


export function loadAvesSuccess(aves){
  return {type: types.LOAD_AVES_SUCCESS, aves}
}

export function updateAveSuccess(ave){
  return {type: types.UPDATE_AVE_SUCCESS, ave}
}

export function createAveSuccess(ave){
  return {type: types.CREATE_AVE_SUCCESS, ave}
}

export function deleteAveSuccess(ave){
  return {type: types.DELETE_AVE_SUCCESS, ave}
}

export function loadAves() {
  return function(dispatch) {

    return aveApi.getAllAves()
    .then(aves => {
      dispatch(loadAvesSuccess(aves))
    })
    .catch(error => {
      throw(error)
    })
  }
}

export function updateAve(ave,shouldUpdateErrors) {

  return function(dispatch) {

    return aveApi.updateAve(ave).then(response => {
      if(!response.ok){
        throw(response)
      }

      return response.json()
    }).then( responseAve  => {
      dispatch(updateAveSuccess(ave));

    }).catch(error => {
      shouldUpdateErrors('Verifique los campos ingresados');
    })

  }

}

export function createAve(ave,redirectOnSuccess,shouldUpdateErrors){
  return function(dispatch) {
    return aveApi.createAve(ave).then(response => {

      if(!response.ok){

        response.json().then(datos => {
          console.log(datos)
        })
        throw(response);
      }

      return response.json()

    }).then(data => {

      console.log(data)

      redirectOnSuccess(ave);

      dispatch(createAveSuccess(data.ave));
      return ave;

    }).catch(error => {

      console.log(error);

      shouldUpdateErrors('Verifique los campos ingresados');

    })
  }
}

export function deleteAve(ave,redirectOnSuccess) {
  return function(dispatch) {
    return aveApi.deleteAve(ave).then(() => {
      redirectOnSuccess();
      dispatch(deleteAveSuccess(ave));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}

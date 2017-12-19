import * as types from './actionTypes'
import fetch from 'cross-fetch'
import zonaApi from '../api/zonaApi'


export function loadZonasSuccess(zonas){
  return {type: types.LOAD_ZONAS_SUCCESS, zonas}
}


export function loadZonas() {
  return function(dispatch) {

    return zonaApi.getAllZonas()
    .then(zonas => {
      dispatch(loadZonasSuccess(zonas))
    })
    .catch(error => {
      throw(error)
    })
  }
}

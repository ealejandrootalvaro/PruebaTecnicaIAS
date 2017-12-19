import {combineReducers} from 'redux'
import aves from './aveReducer'
import zonas from './zonaReducer'

const rootReducer = combineReducers({
  aves,
  zonas
})

export default rootReducer

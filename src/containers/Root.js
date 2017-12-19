import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import {loadAves} from '../actions/aveActions'
import {loadZonas} from '../actions/zonaActions'
import App from '../App'

const store = configureStore()

store.dispatch(loadAves())
store.dispatch(loadZonas())

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

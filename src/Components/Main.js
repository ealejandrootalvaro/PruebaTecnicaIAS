import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import AvePage from './AvePage'
import AvesPage from './AvesPage'
import NewAvePage from './NewAvePage'


class Main extends Component {

  render(){

    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={AvesPage} />
          <Route exact path="/aves" component={AvesPage} />
          <Route exact path='/aves/crear' component={NewAvePage} />
          <Route path='/aves/:cdave' component={AvePage} />

        </Switch>
      </div>
    )

  }

}

export default Main;

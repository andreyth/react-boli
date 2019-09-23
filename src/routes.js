import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import t from 'prop-types'

import requiresAuth from '~/hocs/requiresAuth'
import Teste from '~/components/Teste'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => <h1>Hello em /</h1>} />
      <Route exact path='/teste' component={requiresAuth(Teste)} />
    </Switch>
  </BrowserRouter>
)

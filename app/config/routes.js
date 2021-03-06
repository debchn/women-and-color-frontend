import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// App
import {
  Home, Page, Register,
  Speaker, Profile, Work, Social
} from 'pages';
import MainContainer from './Main/MainContainer';


import store, { history } from '../redux/store'

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Page} />
          <Route path="/profile" component={Profile} />
          <Route path="/work" component={Work} />
          <Route path="/social" component={Social} />
          <Route path="/speaker/:id" component={Speaker} />
        </Switch>
      </MainContainer>
    </Router>
  </Provider>
)

export default routes

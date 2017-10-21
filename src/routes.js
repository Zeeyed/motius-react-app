import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/signin/SignUpPage';

export default (
  <Route path='/'component={App} >
    <IndexRoute component={WelcomePage} />
    <Route path='signin' component={SignUpPage} />
  </Route>
)
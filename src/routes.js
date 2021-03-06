import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import WelcomePage from './components/WelcomePage';
import SignInPage from './components/signin/SignInPage';
import Projects from './components/projects/Projects';

export default (
  <Route path='/'component={App} >
    <IndexRoute component={WelcomePage} />
    <Route path='signin' component={SignInPage} />
    <Route path='projects' component={Projects} />
  </Route>
)
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import HomePage from './containers/HomePage'
import AboutPage from './components/AboutPage'
import LoginPage from './containers/LoginPage'
import ResearchPage from './containers/ResearchPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='about' component={AboutPage}/>
        <Route path='login' component={LoginPage}/>
        <Route path='research' component={ResearchPage}/>
    </Route>
)
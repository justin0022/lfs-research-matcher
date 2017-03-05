import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import HomePage from './containers/HomePageV2'
import AboutPage from './components/AboutPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='about' component={AboutPage}/>
    </Route>
)
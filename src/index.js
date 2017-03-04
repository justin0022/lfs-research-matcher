import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import rootReducer from './reducers'
import routes from './routes'

import App from './containers/App'
import './index.css'



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

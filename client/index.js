import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import { browserHistory } from 'react-router'

import store from './store'

ReactDOM.render(
  <Root store={store}  history={browserHistory} />
  , document.querySelector('main')
)



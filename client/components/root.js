import { Provider } from 'react-redux'
import React from 'react'
import App from './App'
import JobSearch from './JobSearch'
import Charts from './Charts'
import ChartJobPrevalence from './ChartJobPrevalence'
import ChartJobAmountBasedOnTech from './ChartJobAmountBasedOnTech'
import ChartJobAmountBasedOnLocation from './ChartJobAmountBasedOnLocation'
import { Router, Route } from 'react-router'

const Root = ({store, history}) => (
  <Provider store={store} >
    <Router history={history}>
      <Route path='/' component={App} >
          <Route path='/search' component={JobSearch} />
      </Route>
    </Router>
  </Provider>
)

export default Root



import React, { Component } from 'react'
import { Match } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import JobSearch from './JobSearch'
import Menu from './Menu'
import Charts from './Charts'

var wrapComponent = function(Component, props) {
  return React.createClass({
    render: function() {
      return React.createElement(Component, props);
    }
  });
};

class App extends Component {

  constructor (props) {
    super(props)

  }

  getJobs () {
    const jobs = this.props.api.service('/api/v1/jobs')
    jobs.get()
    .then((res) => {
      console.log("RESULT ", res)
    })
    .catch(err => {
      console.log("ERROR ", err)
    })
  }

  searchTerm (term) {
    const jobsByTerm = this.props.api.service(`/api/v1/${term}`)
    jobsByTerm.get()
    .then((res) => {
      console.log("RESULT ", res)
    })
    .catch(err => {
      console.log("ERROR ", err)
    })
  }

  render () {
    console.log('this.props.api ', this.props.api)
    // temporary
    var term = 'time-series/weeks?term=react'
    {var x = this.getJobs()}
    {var x = this.searchTerm(term)}
    return (
      <div>
        <Menu />
        <Match pattern="/search" component={wrapComponent(JobSearch, {getJobs: this.getJobs, searchTerm: this.searchTerm})}/>
        <Match pattern="/charts" component={wrapComponent(Charts, {getJobs: this.getJobs, searchTerm: this.searchTerm})}/>
      </div>
    )
  }

}

export default App

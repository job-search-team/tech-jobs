import React, { Component } from 'react'
import { Match } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import JobSearch from './JobSearch'
import Menu from './Menu'
import Charts from './Charts'

class App extends Component {

  constructor (props) {
    super(props)
  }

  // getJobs () {
  //   const jobs = this.props.api.service('/api/v1/jobs')
  //   jobs.get()
  //   .then((res) => {
  //     console.log("RESULT ", res)
  //   })
  //   .catch(err => {
  //     console.log("ERROR ", err)
  //   })
  // }

  searchTerm (term) {
    const jobs = this.props.api.service(`/api/v1/${term}`)
    jobs.get()
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
    {var x = this.getJobs(term)}
    return (
      <div>
        <Menu />
        <Match pattern="/search" component={JobSearch}/>
        <Match pattern="/charts" component={Charts}/>
      </div>
    )
  }

}

export default App

import React, { Component } from 'react'
import JobSearchSideBar from './JobSearchSideBar'
import JobSearchContent from './JobSearchContent'
import api from '../lib/api'

class JobSearch extends Component {

  constructor (props) {
    super(props)
    this.state = {
      resultList: []
    }
    this.findJobsByTerm = this.findJobsByTerm.bind(this)
  }

  getJobs () {
     const jobs = api.service('/api/v1/jobs')
     jobs.get()
     .then((res) => {
       console.log("RESULT ", res)
     })
     .catch(err => {
       console.log("ERROR ", err)
     })
   }

  // searchTerm (term) {
  //   const period = api.service('api/v1/time-series/weeks')
  //   period.find({
  //     query: {
  //       term
  //     }
  //   })
  //   .then((res) => {
  //     console.log("RESULT ", res)
  //   })
  //   .catch(err => {
  //     console.log("ERROR ", err)
  //   })
  // }

  findJobsByTerm (term) {
    const jobsByTerm = api.service('find-jobs-by-term')
    jobsByTerm.find({
      query: {
        term
      }
    })
    .then((res) => {
      this.setState({resultList: res})
      console.log("RESULT ", res)
    })
    .catch(err => {
      console.log("ERROR ", err)
    })
  }

  render () {
    return (
      <div className="container" style={{paddingTop:'30px'}}>
        <div className="row">
          <JobSearchSideBar findJobsByTerm = {this.findJobsByTerm} />
          <JobSearchContent resultList = {this.state.resultList} />
        </div>
      </div>
    )
  }
}

export default JobSearch

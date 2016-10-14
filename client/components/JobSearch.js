import React, { Component } from 'react'
import JobSearchSideBar from './JobSearchSideBar'
import JobSearchContent from './JobSearchContent'
import api from '../lib/api'
var _ = require('lodash')

class JobSearch extends Component {

  constructor (props) {
    super(props)

    this.getJobs = this.getJobs.bind(this)
    this.searchTerm = this.searchTerm.bind(this)
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

   findJobsByTerm (arr) {
     const jobs = api.service('api/v1/jobs')
     jobs.find({
       query: {
         url: {
           $in: arr
         }
       }
     })
     .then((res) => {
       console.log("RESULT ", res)
     })
     .catch(err => {
       console.log("ERROR ", err)
     })
   }

  searchTerm (term) {
    const period = api.service('api/v1/terms')
    period.find({
      query: {
        term
      }
    })
    .then((res) => {
      console.log("RESULT ", res)
      const urls = _.map(res.data, (r) => {return r.job_url})
      console.log("RESULT ", urls)
      {this.findJobsByTerm(urls)}
    })
    .catch(err => {
      console.log("ERROR ", err)
    })
  }

  render () {
    return (
      <div className="container" style={{paddingTop:'30px'}}>
        <div className="row">
          <JobSearchSideBar searchTerm = {this.searchTerm}/>
          <JobSearchContent />
        </div>
      </div>
    )
  }
}

export default JobSearch

import React, { Component } from 'react'
import JobSearchSideBar from './JobSearchSideBar'
import JobSearchContent from './JobSearchContent'
import api from '../lib/api'
import trim from 'trim'
import _ from 'lodash'

class JobSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobs: [],
      term: ''
    }
    this.findJobsByTerm = this.findJobsByTerm.bind(this)
  }

  findJobsByTerm (term, location) {
    const jobsByTerm = api.service('find-jobs-by-term')
    jobsByTerm
      .find({
        query: {
          term: term
        }
      })
      .then((jobs) => {
        if (location) {
          jobs = _.filter(jobs, (job) => trim(x.location) === location)
        }
        // call setState once in a method
        this.setState({jobs, term})
      })
      // handle error
      .catch(err => {
      })
  }

  render () {
    const { jobs, term } = this.state
    return (
      <div className='container' style={{paddingTop: '30px'}}>
        <div className='row'>
          <JobSearchSideBar findJobsByTerm={this.findJobsByTerm} />
          <JobSearchContent {...this.state}/>
        </div>
      </div>
    )
  }
}

export default JobSearch

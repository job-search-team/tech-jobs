import React, { Component } from 'react'
import JobSearchSideBar from './JobSearchSideBar'
import JobSearchContent from './JobSearchContent'
import api from '../lib/api'
import trim from 'trim'
import _ from 'lodash'
import { connect } from 'react-redux'

const JobSearch = ({findJobsByTerm, jobs}) => {
  return (
  <div className='container' style={{paddingTop: '30px'}}>
    <div className='row'>
      <JobSearchSideBar findJobsByTerm={findJobsByTerm}/>
      <JobSearchContent jobs={jobs} />
    </div>
  </div>
)
}

export default JobSearch

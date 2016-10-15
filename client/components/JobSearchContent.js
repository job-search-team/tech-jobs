import React, { Component } from 'react'
import JobSearchContentRow from './JobSearchContentRow'
import _ from 'lodash'

const JobSearchContent = ({jobs, term}) =>
  <div className='col-md-9'>
    <div className='panel panel-info'>
      <h2 style={{textAlign: 'center'}}>
        Searchword: {term}
      </h2>
      <div className='panel-body'>
        {
          _.map(jobs, (job, index) => {
            return <JobSearchContentRow key={index} {...job} />
          })
        }
      </div>
    </div>
  </div>;

export default JobSearchContent

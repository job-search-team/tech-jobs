import React from 'react'
import JobSearchContentRow from './JobSearchContentRow'

function JobSearchContent () {
  return (
    <div className='col-md-9'>
      <div className='panel panel-info'>
        <h2 style={{textAlign: 'center'}}>Searchword: {this.props.searchWord}</h2>
        <div className='panel-body'>
          {this.props.resultList.map((job, index) => {
            return <JobSearchContentRow key={index} job={job} />
          })}
        </div>
      </div>
    </div>
  )
}

export default JobSearchContent

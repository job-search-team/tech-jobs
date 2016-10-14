import React, { Component } from 'react'

class JobSearchContentRow extends Component {
  render() {
    const job = this.props.job
    console.log('THING', job)
    return (
      <div className="row">
        <div className="col-md-8">
          <h3><strong>{job.heading}</strong></h3>
          <h4>{job.listing_date}</h4>
          <a href={job.url}>{job.url}</a>
        </div>
        <div className="col-md-4" style={{borderLeft: '1px solid grey'}}>
          {job.location}
        </div>
      </div>
    )
  }
}

export default JobSearchContentRow

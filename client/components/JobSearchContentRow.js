import React, { Component } from 'react'

class JobSearchContentRow extends Component {
  render() {
    const job = this.props.job
    console.log('THING', job)
    return (
      <div className="row">
        <div className="col-md-8">
          <strong>{job.heading}</strong>
        </div>
        <div className="col-md-4" style={{borderLeft: '1px solid grey'}}>
        Madison
        </div>
      </div>
    )
  }
}

export default JobSearchContentRow

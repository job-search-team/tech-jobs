import React, { Component } from 'react'

const JobSearchContentRow = ({heading, url, listing_date, location}) =>
  <div className='row jobRow'>
    <div className='col-md-8'>
      <h3><strong>{heading}</strong></h3>
      <h4>{listing_date}</h4>
      <a href={url}>{url}</a>
    </div>
    <div className='col-md-4' style={{borderLeft: '1px solid grey'}}>
      {location}
    </div>
  </div>;

export default JobSearchContentRow

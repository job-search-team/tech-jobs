import React from 'react'
import ChartsSideBar from './ChartsSideBar'

function Charts () {
  return (
    <div className='container' style={{paddingTop: '30px'}}>
      <div className='row'>
        <ChartsSideBar />
        <div className='col-md-9'>
          {this.props.children}
        </div>
      </div>
    </div>
  )
}

export default Charts

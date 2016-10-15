import React from 'react'

class JobSearchSideBar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      term: '',
      location: null // option for all of NZ?
    }
    this.handleTerm = this.handleTerm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
  }

  handleTerm(e) {
    this.setState({term: e.target.value})
  }

  handleLocation(e) {
    const location = e.target.value
    // interesting how changing the location triggers a API request
    // Not neccessarily bad
    // Another implementation would filter results that are already in the client
    // and make the user explicitly submit
    this.props.findJobsByTerm(this.state.term, location)
    // setState last
    this.setState({ location })
  }

  handleSubmit (e) {
    e.preventDefault() // always at the top of scope
    this.props.findJobsByTerm(this.state.term, this.state.location)
  }

  render () {
    return (
      <div className='col-md-3'>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Keyword</label>
            <div className='col-sm-9'>
              <input 
                type='text' 
                className='form-control' 
                id='inputEmail3' 
                placeholder='Keyword' 
                onChange={this.handleTerm} />
            </div>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>City</label>
            <div className='col-sm-9'>
              <select 
                type='password' 
                className='form-control' 
                id='inputPassword3' 
                onChange={this.handleLocation}>
                <option disabled selected> Location... </option>
                <option value='Wellington'>Wellington</option>
                <option value='Auckland Central'>Auckland</option>
                <option value='Christchurch'>Christchurch</option>
                <option value='Dunedin'>Dunedin</option>
                <option value='Hamilton'>Hamilton</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <button 
                type='submit' 
                className='btn btn-default  center-block' >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default JobSearchSideBar

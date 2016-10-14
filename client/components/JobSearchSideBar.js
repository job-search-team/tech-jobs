import React from 'react'

class JobSearchSideBar extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      keyword: '',
      location: ''
    }
    this.handleTerm = this.handleTerm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCity = this.handleCity.bind(this)

  }

  handleTerm (e) {
    this.setState({keyword: e.target.value})
  }

  handleCity (e) {
    this.setState({location: e.target.value})
    let term = this.state.keyword
    this.props.findJobsByTerm(term, e.target.value)
  }

  handleSubmit (e) {
    let term = this.state.keyword
    let location = this.state.location
    e.preventDefault()
    this.props.findJobsByTerm(term, location)
  }

  render() {
    return (
      <div className="col-md-3">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-sm-3 control-label">Keyword</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="inputEmail3" placeholder="Keyword" onChange={this.handleTerm} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">City</label>
            <div className="col-sm-9">
              <select type="password" className="form-control" id="inputPassword3" onChange={this.handleCity}>
              <option disabled selected> Location... </option>
                <option value="Wellington">Wellington</option>
                <option value="Auckland Central">Auckland</option>
                <option value="Christchurch">Christchurch</option>
                <option value="Dunedin">Dunedin</option>
                <option value="Hamilton">Hamilton</option>
              </select>
            </div>
          </div>
          {/*<div className="form-group">
            <label className="col-sm-3 control-label">Date from</label>
            <div className="col-sm-9">
              <input type="date" className="form-control" id="inputPassword4" placeholder="Date"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Date to</label>
            <div className="col-sm-9">
              <input type="date" className="form-control" id="inputPassword5" placeholder="Date"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-6">
              <input type="number" className="form-control" placeholder="Salary from"/>
            </div>
            <div className="col-sm-6">
              <input type="number" className="form-control" placeholder="Salary to"/>
            </div>
          </div>*/}
          <div className="form-group">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-default  center-block" >Search</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default JobSearchSideBar

import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import Menu from './Menu'

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findJobsByTerm: (term, location) => {
      dispatch(findJobsByTerm(term, location))
    }
  }
}

class App extends Component {

  // useless constructor
  componentDidMount () {
    browserHistory.push('/search')
  } // my preference: consider placing whitespace between methods https://github.com/airbnb/javascript#whitespace--after-blocks
  render () {
    const { children } = this.props
    console.log(this.props)
    return (
      <div>
        <Menu />
        {React.cloneElement(children, {...this.props})}
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

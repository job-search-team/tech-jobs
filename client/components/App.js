import React, { Component } from 'react'
import Menu from './Menu'
import { browserHistory } from 'react-router'

class App extends Component {

  // useless constructor
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    browserHistory.push('/search')
  } // my preference: consider placing whitespace between methods https://github.com/airbnb/javascript#whitespace--after-blocks
  render () {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }

}

export default App

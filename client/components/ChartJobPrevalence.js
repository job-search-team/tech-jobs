import React, { Component } from 'react'
import api from '../lib/api'
import { VictoryChart, VictoryLine, VictoryLabel, VictoryAxis, VictoryGroup, VictoryScatter } from 'victory'
import ChartGroup from './chart-group'
import _ from 'lodash'
// whitespace
class ChartJobPrevalence extends Component {
  constructor (props) {
    super(props)
    const terms = ['react', 'angular', 'javascript', 'css', 'java']

    this.state = {
      terms: terms,
      // define state structure even if it contains no data
      data: _.reduce(terms, (memo, term) => {
        memo[term] = []
        return memo
      }, {})    
    }
  }

  componentDidMount() {
    this.fetchJobs(this.state.terms)
  }

  fetchJobs(terms) {
    const jobs = api.service('/api/v1/time-series/weeks')
    // use indentation for promise chains 
    // https://github.com/airbnb/javascript#whitespace--chains
    jobs
      .find({
        query: {
          term: {
            $in: terms
          }
        }
      })
      .then((res) => {
        // lodash groupBy performs the same function as
        // this.prepareData
        const data = _.groupBy(res.data, 'term') // remove
        console.log('groupBy data', data) // remove

        // functional style: don't define variables if you don't need to
        //  just call the function where needed
        //  (can get out of hand though)
        this.setState({data: _.groupBy(res.data, 'term')})
      })
      // handle error
      .catch(err => {
      })
  }

  render () {
    // avoid renaming 
    var { angular, react } = this.state.data
    console.log(angular, react)
    return (
      <svg width={900} height={500} viewBox='0 0 450 350'>
        <rect x='0' y='0' width='450' height='350' fill='#ccdee8' />
        <rect x='0' y='0' width='10' height='30' fill='#f01616' />
        <VictoryChart domainPadding={20} >
          <VictoryLabel x={120} y={5}
            textAnchor='start'
            verticalAnchor='start'
            lineHeight={1.2}
            style={titleStyle()}
            >
            {`Prevalence of search: `}
          </VictoryLabel>
          <ChartGroup 
            data={angular} 
            x='week' 
            y='percentage_of_jobs' 
            lineLabel='Angular' /> 
          <ChartGroup 
            data={react} 
            x='week' 
            y='percentage_of_jobs' 
            lineLabel='React' /> 
          <VictoryLabel x={55} y={70}
            verticalAnchor='end'
            lineHeight={1.2} >
            {'Percentage \n % of jobs'}
          </VictoryLabel>
          <VictoryAxis
            standalone={false}
            style={prevalenceAxisStyle()}
            label='Weeks'/>
          <VictoryAxis dependentAxis domain={[0, 1]} />
        </VictoryChart>
      </svg>
    )
  }

}

export default ChartJobPrevalence


function titleStyle () {
  return {
    fill: '#000000',
    fontFamily: 'inherit',
    fontSize: '18px',
    fontWeight: 'bold'
  }
}

function prevalenceAxisStyle () {
  return {
    axis: {stroke: 'black'},
    grid: {strokeWidth: 2},
    tickLabels: {fontSize: 12},
    axisLabel: {fontsize: 16}
  }
}



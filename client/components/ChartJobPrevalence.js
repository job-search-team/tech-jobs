import React, { Component } from 'react'
import api from '../lib/api'
import { VictoryChart, VictoryLine, VictoryLabel, VictoryAxis, VictoryGroup, VictoryScatter } from 'victory'
import _ from 'lodash'
class ChartJobPrevalence extends Component {
  constructor (props) {
    super(props)
    this.state = {
      terms: ['react', 'angular', 'javascript', 'css', 'java']
    }
  }
  componentDidMount() {
    const { terms } = this.state
    const jobs = api.service('/api/v1/time-series/weeks')
    jobs.find({
      query: {
        term: {
          $in: terms
        }
      }
    })
    .then((res) => {
      var newState = this.prepareData(res.data)
      console.log('newState', newState);
      this.setState({data: newState})
    })
    .catch(err => {
    })
  }
  prepareData(data) {
    var result = {}
    var { terms } = this.state
    terms.forEach((t) => {
      result[t] = []
    })
    data.forEach((d) => {
      result[d.term].push(d)
    })
    return result
  }
  render () {
    var { data } = this.state
    if(!data) return <div> </div>
    var dataAngular = data.angular
    var dataReact = data.react
    return (
      <svg width={900} height={500}
      viewBox="0 0 450 350"
      >
      <rect
      x="0" y="0"
      width="450" height="350"
      fill="#ccdee8"
      />
      <rect
      x="0"
      y="0"
      width="10"
      height="30"
      fill="#f01616"
      />
      <VictoryChart
      domainPadding={20}
      >
      <VictoryLabel
      x={120} y={5}
      textAnchor="start"
      verticalAnchor="start"
      lineHeight={1.2}
      style={{
        fill: "#000000",
        fontFamily: "inherit",
        fontSize: "18px",
        fontWeight: "bold"
      }}
      >
      {`Prevalence of search: `}
      </VictoryLabel>
      <VictoryLabel
      x={55} y={70}
      verticalAnchor="end"
      lineHeight={1.2}
      >
      {"Percentage \n % of jobs"}
      </VictoryLabel>
      <VictoryAxis
      standalone={false}
      style={{
        axis: {stroke: "black"},
        grid: {strokeWidth: 2},
        tickLabels: {fontSize: 12},
        axisLabel: {fontsize: 16}
      }}
      label="Weeks"
      />
      <VictoryAxis dependentAxis
      domain={[0, 1]}/>
      <VictoryGroup
      style={{
        data: {strokeWidth: 3}
      }}
      data={dataReact}
      >
      <VictoryLine
      interpolation={"cardinal"}
      style={{
        data: {stroke: "#822722"}
      }}
      label="React"
      x={'week'}
      y={'percentage_of_jobs'}
      />
      <VictoryScatter
      style={{
        data: {
          fill: "#822722",
          stroke: "white"
        },
        labels: {
          fill: "#822722",
          fontSize: 8,
          padding: 4
        }
      }}
      x={'week'}
      y={'percentage_of_jobs'}
      labels={_.map(dataReact, (d) => d.percentage_of_jobs.toString().slice(0, 4) )}
      />
      </VictoryGroup>
      <VictoryGroup
      style={{
        data: {strokeWidth: 3}
      }}
      data={dataAngular}
      >
      <VictoryLine
      interpolation={"cardinal"}
      style={{
        data: {stroke: "#822722"}
      }}
      label="Angular"
      x={'week'}
      y={'percentage_of_jobs'}
      />
      <VictoryScatter
      style={{
        data: {
          fill: "#822722",
          stroke: "white"
        },
        labels: {
          fill: "#822722",
          fontSize: 8,
          padding: 4
        }
      }}
      x={'week'}
      y={'percentage_of_jobs'}
      labels={_.map(dataAngular, (d) => d.percentage_of_jobs.toString().slice(0, 4) )}
      />
      </VictoryGroup>
      </VictoryChart>
      </svg>
    )
  }

}

export default ChartJobPrevalence

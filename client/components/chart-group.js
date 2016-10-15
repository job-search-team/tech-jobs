import React from 'react'
import { VictoryLine, VictoryGroup, VictoryScatter } from 'victory'
import _ from 'lodash'

const ChartGroup = ({data, x, y, lineLabel}) => 
  <VictoryGroup style={{data: {strokeWidth: 3}}} data={data} >
    <VictoryLine
      interpolation='cardinal'
      style={{data: {stroke: '#822722'}}}
      label={lineLabel}
      x={x}
      y={y} />
    <VictoryScatter
      style={scatterStyle()}
      x={x}
      y={y}
      labels={pointLabels(data, x)}
    />
  </VictoryGroup>;

export default ChartGroup

function pointLabels (data, key) {
  return _.map(data, (d) => d.percentage_of_jobs.toString().slice(0, 4))
}

function scatterStyle () {
  return {
    data: {
      fill: '#822722',
      stroke: 'white'
    },
    labels: {
      fill: '#822722',
      fontSize: 8,
      padding: 4
    }
  }
}




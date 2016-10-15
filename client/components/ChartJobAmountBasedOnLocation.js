import React, { Component } from 'react'
import { VictoryBar, VictoryChart, VictoryLabel } from 'victory'

// consider renaming to 'LocationChart'
//
// "Names of 2 to 4 words and 8 to 20 characters should be all you need" 
// http://www.informit.com/articles/article.aspx?p=131025&seqNum=3
class ChartJobAmountBasedOnLocation extends Component {

  render () {
    return (
      <svg width={500} height={500}>
        <VictoryChart>
          <VictoryLabel
            x={5} y={35}
            verticalAnchor='end'
            lineHeight={1.2}
        >
            {'Number of Jobs'}
          </VictoryLabel>

          <VictoryLabel
            x={20} y={290}
            horizontalAnchor='end'
            lineHeight={1.2}
          >
            {'Location'}
          </VictoryLabel>

          <VictoryBar />
        </VictoryChart>
      </svg>
    )
  }

}

export default ChartJobAmountBasedOnLocation

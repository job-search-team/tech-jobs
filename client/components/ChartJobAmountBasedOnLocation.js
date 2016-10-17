import React from 'react'
import { VictoryBar, VictoryChart, VictoryLabel } from 'victory'

function ChartJobAmountBasedOnLocation () {
  return (
    <svg width={500} height={500}>
      <VictoryChart>
        <VictoryLabel
          x={5} y={35}
          verticalAnchor='end'
          lineHeight={1.2}>
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

export default ChartJobAmountBasedOnLocation

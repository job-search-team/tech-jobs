import initialState from '../state'
import { combineReducers } from 'redux'

console.log('state', initialState)

export default combineReducers({
  jobs
})

function jobs (state=initialState.jobs, action) {
  switch (action.type) {
    case 'RECEIVE_JOBS':
      return action.payload // payload === array of jobs
    default:
      return state
  }


}

// combinreducers ->
// createStore
// store
// store subscribe



// UI - user interacts with a component
// listener
// store.dispatch - action creato - action
// reducer updates state
// updates listeners
// render is litening
// rerenders app with new state
//

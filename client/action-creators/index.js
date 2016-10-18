import api from '../lib/api'
import _ from 'lodash'

export function findJobsByTerm (term, location) {
  return function (dispatch) {
    const jobsByTerm = api.service('find-jobs-by-term')
    jobsByTerm
    .find({
      query: {
        term: term
      }
    })
    .then((jobs) => {
      if (location) {
        jobs = _.filter(jobs, (job) => trim(x.location) === location)
      }
      // call setState once in a method
      dispatch(receiveJobs(jobs))
    })
  }
}

function receiveJobs (jobs) {
  return {
    type: 'RECEIVE_JOBS',
    payload: jobs
  }
}




const findJobsByTerm = require('./find-jobs-by-term');
const jobs = require('./jobs')
const timeSeries = require('./time-series')
const terms = require('./terms')

module.exports = function() {
  const app = this

  app.configure(timeSeries)
  app.configure(terms)
  //  app.configure(authentication)
  app.configure(jobs)
  app.configure(findJobsByTerm);
}

const db = require('../../../data')
const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    console.log("THIS IS PARAMS", params)
    return db('jobs')
    .join('terms', 'jobs.url', '=', 'terms.job_url')
    .select()
    .where(params.query)
  }

  // get(id, params) {
  //   return Promise.resolve({
  //     id, text: `A new message with ID: ${id}!`
  //   });
  // }
  //
  // create(data, params) {
  //   if(Array.isArray(data)) {
  //     return Promise.all(data.map(current => this.create(current)));
  //   }
  //
  //   return Promise.resolve(data);
  // }
  //
  // update(id, data, params) {
  //   return Promise.resolve(data);
  // }
  //
  // patch(id, data, params) {
  //   return Promise.resolve(data);
  // }
  //
  // remove(id, params) {
  //   return Promise.resolve({ id });
  // }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/find-jobs-by-term', new Service());

  // Get our initialize service to that we can bind hooks
  const findJobsByTermervice = app.service('/find-jobs-by-term');

  // Set up our before hooks
  findJobsByTermervice.before(hooks.before);

  // Set up our after hooks
  findJobsByTermervice.after(hooks.after);
};

module.exports.Service = Service;

//
// where: (query, callback) => {
//   db('jobs')
//   .join('terms', 'jobs.url', '=', 'terms.job_url')
//   .select()
//   .where(query)
//   .asCallback(callback)
// },

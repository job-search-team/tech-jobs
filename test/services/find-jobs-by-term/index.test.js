'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('find-jobs-by-term service', function() {
  it('registered the find-jobs-by-term service', () => {
    assert.ok(app.service('find-jobs-by-term'));
  });
});

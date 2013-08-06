var vows = require('vows'),
    httpConsole = require('../lib/http-console'),
    assert = require('assert');

var opts = {
  host: '127.0.0.1',
  post: '80',
  options: {
    rememberCookies: true,
    json: false,
    timeout: true,
    verbose: false
  }
};

vows.describe('Construction')
  .addBatch({
    'When initializing': {
      topic: new(httpConsole.Console)(opts.host, opts.port, '/',  opts.options),
      'We receive a an instance of the main class.': function (topic) {
        assert.instanceOf (topic, httpConsole.Console);
      },
      'Options match ours': function (topic) {
        assert.equal(topic.options ,opts.options);
      }
    }
  })
.run();

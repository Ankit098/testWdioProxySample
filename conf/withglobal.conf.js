require('global-agent/bootstrap');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: ['./specs/test1.js'],
  exclude: [],

  logLevel: 'debug',
  outputDir: './logs-with-global',
  coloredLogs: false,
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        browserstackLocal: true,
        opts: { proxyUser: 'localhost', proxyPort: 8888 },
      },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'catalina',
        buildName: 'wdio_test_dec8'
      },
    },
  ],

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};

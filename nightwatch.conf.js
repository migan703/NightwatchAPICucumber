const chromedriver = require('chromedriver');

module.exports = {
  test_settings: {
    test_workers : {enabled : true, workers : "auto"},
    chrome: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      },
    }
  }
};
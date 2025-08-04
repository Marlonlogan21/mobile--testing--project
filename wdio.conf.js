

exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': '/Users/marlon/Downloads/ApiDemos-debug.apk',
        'appium:noReset': true,
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        timeout: 60000
    }
};

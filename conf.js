const HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots',
            clientDefaults: {
                columnSettings: {
                    displayTime: true,
                    displayBrowser: true,
                    displaySessionId: false,
                    displayOS: false,
                    inlineScreenshots: false
                }
            }
        }).getJasmine2Reporter());
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['tests/linkParse.spec.js'],
};
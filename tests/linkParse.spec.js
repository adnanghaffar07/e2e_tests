const linkParsePageObject = require('./linkParsePageObject.js');

describe('https://demos.shortpoint.com/', function () {
    it('parsing links', function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();
        browser.get('https://demos.shortpoint.com');
        linkParsePageObject.getUrls();
    })
});
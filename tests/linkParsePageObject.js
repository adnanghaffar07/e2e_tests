const request = require('sync-request');

function LinkParsePageObject() {
    let linkCount = 0;
    this.getUrls = () => {
        element.all(by.css('li.dynamic-children a.dynamic.menu-item.ms-core-listMenu-item.ms-displayInline.ms-navedit-linkNode')).then((links) => {
            linkCount = links.length;
            expect(links.length).toEqual(133);
            links.forEach((link) => {
                link.getAttribute('href').then((url) => {
                    this.checkUrlStatus(url);
                });
            })
        });
    };

    this.checkUrlStatus = (url) => {
        let response = request('GET', url);
        console.log(url);
        expect(response.statusCode).toEqual(200);
    };
}

module.exports = new LinkParsePageObject();
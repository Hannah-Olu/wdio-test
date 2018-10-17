const Insight = require('../site-profiles/Insight')
const removeOverlay = require('../helpers/remove-overlay')

describe('Insight test', function() {
    before('Navigate to insight page', function() {
        browser.url('/insights')
        // removeOverlay();
    })

    it('should be visible', function() {
        expect(Insight.sideBar.isVisible()).to.be.true
    })

    it('should not show error while capturing screenshot', function() {
        expect(Insight.fillForm()).to.not.throw
    })
})
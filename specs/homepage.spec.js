// import Homepage from '../site-profiles/Homepage'
const Homepage = require('../site-profiles/Homepage')
const removeOverlay = require('../helpers/remove-overlay');

describe('Homepage test', function() {
    before('Navigate to home page', function() { 
        browser.url('/');
        removeOverlay();
    });

    it('should be visible', function() {
        expect(Homepage.logo.isVisible()).to.be.true
    })

    it('should navigate to Get in Touch Page', function() {
        Homepage.getInTouch.click()
        // console.log(browser.url())
        expect(browser.url().value).to.equal('https://ecs-digital.co.uk/contact')
    })
})
const Events = require('../site-profiles/Events')
const removeOverlay = require('../helpers/remove-overlay')

describe('Events page test', function(){
    before('Navigate to events page', function(){
        browser.url('/site-profiles/events');
        removeOverlay();
    })

    it ('should be visible', function (){
        expect (Events.eventsHeading.isVisible()).to.be.true
    })
    
    it('should be visible', function (){
        expect (Events.eventsBtn.isVisible()).to.be.true
    })

})
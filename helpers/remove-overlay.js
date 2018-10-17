function removeOverlay() {
    browser.waitForVisible("#hs-eu-confirmation-button", 5000)
        if ($("#hs-eu-confirmation-button").isVisible()) {
            $("#hs-eu-confirmation-button").click()
        }

        browser.waitForVisible("#catapultCookie", 5000)

        if ($("#catapultCookie").isVisible()) {
            $("#catapultCookie").click()
        }
}

module.exports = removeOverlay
function removeOverlay() {
    browser.waitForVisible("#hs-eu-confirmation-button", 7000)
        if ($("#hs-eu-confirmation-button").isVisible()) {
            $("#hs-eu-confirmation-button").click()
        }

        browser.waitForVisible("#catapultCookie", 7000)

        if ($("#catapultCookie").isVisible()) {
            $("#catapultCookie").click()
        }
}

module.exports = removeOverlay
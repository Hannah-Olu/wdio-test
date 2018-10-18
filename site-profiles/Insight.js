class Insight {
    get sideBar() {
        return $(".sidebar-header")
        
    }

    fillForm() {
        $('input[name="firstname"]').addValue("Hannah")
        $('input[name="lastname"]').addValue("Olujekun")
        browser.saveScreenshot("insight-screenshot.png")
    }
}

module.exports = new Insight()
class Homepage {
    get logo() {
        return $(".navbar-brand")
    }

    get getInTouch() { return $("a[href='https://ecs-digital.co.uk/contact']") }
}

module.exports = new Homepage()
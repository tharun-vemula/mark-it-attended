exports.getHome = (req, res) => {
    res.render('index-attendee')
}

exports.getLogin = (req, res) => {
    res.render('login')
}

exports.getScanner = (req, res) => {
    res.render('main')
}
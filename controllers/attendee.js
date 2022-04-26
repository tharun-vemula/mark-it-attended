exports.getHome = (req, res) => {
    res.render('index')
}

exports.getLogin = (req, res) => {
    res.render('login')
}

exports.getScanner = (req, res) => {
    res.render('main')
}
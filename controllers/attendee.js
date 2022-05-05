exports.getHome = (req, res) => {
    res.render('index-attendee', {username : req.session.username})
}

exports.getLogin = (req, res) => {
    res.render('login')
}

exports.postLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(username == '2020bcs0066' && password == 'vemulKN86'){
        req.session.username = username;
        const result = await req.session.save();
        console.log(result)

        res.redirect('/home');
    }
    
}
exports.getScanner = (req, res) => {
    res.render('main')
}
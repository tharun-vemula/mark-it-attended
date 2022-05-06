const User = require('../models/user')

exports.getHome = (req, res) => {
    res.render('index-attendee', {user : req.session.user})
}

exports.getLogin = (req, res) => {
    res.render('login')
}

exports.postLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const user = await User.findOne({username : username , password : password})
    
    if(user.type == 'student'){
        req.session.user = {
            name : user.firstName + " " + user.lastName,
            firstName : user.firstName,
            lastName : user.lastName,
            semester : user.semester
        }

        res.redirect('/home')
    }
    else{
        req.session.user = {
            name : user.firstName + " " + user.lastName,
      }

        res.redirect('/professor')
    }

}


exports.getScanner = (req, res) => {
    res.render('main')
}

exports.logout = (req, res) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
      });
}
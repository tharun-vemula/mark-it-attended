const bcrypt = require('bcrypt');

exports.getHome = (req, res) => {
    res.render('index-professor', {user : req.session.user});
}

exports.getQR = async (req, res) => {
    const lecture = req.params.lecture;
    
    const URL = `https://attendance-iiit.herokuapp.com/mark/${lecture}`;

    res.render('make-qr', {url : URL})
}

exports.viewAttendancePerCourse = (req, res) => {
    const id = req.params.id;
    res.render('view-attendance');
}
const bcrypt = require('bcrypt');

exports.getHome = (req, res) => {
    res.render('index-professor');
}

exports.getQR = async (req, res) => {
    const lecture = req.params.lecture;
    
    const URL = `http://localhost:1234/mark/${lecture}`;

    res.render('make-qr', {url : URL})
}

exports.viewAttendancePerCourse = (req, res) => {
    const id = req.params.id;
    res.render('view-attendance');
}
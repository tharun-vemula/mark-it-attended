const Attendance = require('../models/attendance');
exports.markAttendance = async (req, res) => {
    const user = req.session.user;
    const lecture = req.params.lecture;

    const markAttendance = new Attendance({
        date : new Date(),
        name: user.name,
        class: lecture,
        semester: user.semester
    })

   const result = await markAttendance.save()
   console.log(result);

   res.redirect('/');
}
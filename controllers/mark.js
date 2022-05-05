const Attendance = require('../models/attendance');
exports.markAttendance = async (req, res) => {
    // const username = req.session.username;
    // const lecture = req.params.lecture;

    const markAttendance = new Attendance({
        date : new Date(),
       // name : username,
       name : "Tharun",
        class : "lecture",
        semester : "req.session.semester"
    })

   const result = await markAttendance.save()
   console.log(result);

   res.redirect('/');
}
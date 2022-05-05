exports.markAttendance = async (req, res) => {
    const username = req.session.username;
    const lecture = req.params.lecture;

    const markAttendance = {
        date : new Date(),
        name : username,
        class : lecture,
        semester : req.session.semester
    }

   const result = await attendance.save(markAttendance)
   console.log(result);

   res.redirect('/');
}
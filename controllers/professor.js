exports.getHome = (req, res) => {
    res.render('professor-home');
}

exports.getQR = (req, res) => {
    const lecture = req.query.lecture;
    const professorName = req.query.name;
    const URL = `http://localhost:1234/${lecture}/${professorName}`;

    res.render('make-qr', {url : URL})
}
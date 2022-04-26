const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const attendeeRouter = require('./routers/attendee');
const professorRouter = require('./routers/professor')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(attendeeRouter);
app.use(professorRouter);

app.listen('1234', (req, res) => {
    console.log('Running')
})
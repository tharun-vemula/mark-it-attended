const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const router = require('./routers/router');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen('1234', (req, res) => {
    console.log('Running')
})
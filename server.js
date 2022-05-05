const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);

const attendeeRouter = require('./routers/attendee');
const professorRouter = require('./routers/professor')
const attendanceRouter = require('./routers/mark')

const app = express();

const MONGO_URI = 'mongodb://tharun:F0zvliOynvWjbrKf@cluster0-shard-00-00.iy4kk.mongodb.net:27017,cluster0-shard-00-01.iy4kk.mongodb.net:27017,cluster0-shard-00-02.iy4kk.mongodb.net:27017/attendance?ssl=true&replicaSet=atlas-k2o103-shard-0&authSource=admin&retryWrites=true&w=majority';


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongoDBStore({
    uri : MONGO_URI,
    collection : 'sessions',
});

app.use(
    session({ 
        secret : 'my secret', 
        resave : false, 
        saveUninitialized : false,
        store : store})
);

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
  });

app.use(
    session({ 
        secret : 'my secret', 
        resave : false, 
        saveUninitialized : false,
        store : store})
);

app.use(attendeeRouter)
app.use(professorRouter)
app.use(attendanceRouter)


mongoose
    .connect(MONGO_URI)
    .then(result => {
        app.listen(1234, (req,res) =>{
            console.log("Running")
        });
    })
    .catch(err => {
        console.log(err);
    })

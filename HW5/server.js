// TODO: Import various things...
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');

const isAuthenticated = require('./middlewares/isAuthenticated.js');

var accountRoutes = require('./routes/account.js');


// instantiate express app...TODO: make sure that you have required express
var app = express();
// instantiate a mongoose connect call
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hw5-new')

// const User = require('./models/user.js')
const Question = require('./models/question.js')


// set the express view engine to take care of ejs within html files
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');


// TODO: set up body parser...hint hint: https://github.com/cis197/lecture-examples/blob/master/server-example/server.js#L27
app.use(bodyParser.urlencoded({extended: false}))

// TODO: set up cookie session ... hint hint: https://github.com/cis197/lecture-examples/blob/master/server-example/server.js#L21
app.use(cookieSession({
    name: 'local-session',
    keys: ['spooky'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// setup account routes
app.use('/account', accountRoutes);

// TODO: render out an index.html page with questions (queried from db)
//       also pass to ejs template a user object so we can conditionally
//       render the submit box

app.get('/', function (req, res, next) {
    console.log(req.session.user);
    var questionDb = Question.find({}, function (err, results) {
        if (!err) {
            res.render('index', {questions: results, user: req.session.user});
        } else {
            next(new Error(err.message))
        }
    });
});


// TODO: set up post route that will
//       a) check to see if a user is authenticated
//       b) add a new question to the db
//       c) redirect the user back to the home page when done

app.post('/', isAuthenticated, function (req, res, next) {
    var q = req.body.question; // classname
    var dbQ = new Question({questionText: q});
    dbQ.save(function (err, result) {
        if (!err) {
            res.redirect('/');
        } else {
            next(err.message);
        }
    });
});


// don't put any routes below here!
app.use(function (err, req, res, next) {
    return res.send('ERROR :  ' + err.message)
})

app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port ' + (process.env.PORT || 3000))
})



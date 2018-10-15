var express = require('express')
var router = express.Router();
const User = require('../models/user.js')
const isAuthenticated = require('../middlewares/isAuthenticated.js');


// TODO: Set up account routes under the '/account' route prefix.
// (i.e. login should be /account/login, signup = /account/signup,
//       logout = /account/logout)
router.get('/signup', function (req, res, next) {
    res.render('signup');
});

router.post('/signup', function (req, res, next) {
    var {username, password} = req.body;
    // debug check if this username has already existed
    User.find({username: username}, function (err, results) {
        if (!err) {
            if (results.length !== 0) {
                console.log(results);
                next(new Error('User existed! Please try with another username.'));
            } else {
                var user = new User({username: username, password: password})
                user.save(function (err, result) {
                    if (!err) {
                        res.redirect('/') // just redirect back to the home page
                    } else {
                        next(err);
                    }
                });
            }
        } else {
            next(err);
        }
    });

});

router.get('/login', function (req, res) {
    res.render('login');
});

router.post('/login', function (req, res, next) {
    var {username, password} = req.body;
    User.findOne({username: username, password: password}, function (err, result) {
        if (err) {
            next(err);
        } else if (!result) {
            next(new Error('Wrong username or password'));
        } else {
            req.session.user = result.username;
            res.redirect('/');
        }
    })
});

router.get('/logout', isAuthenticated, function (req, res, next) {
    req.session.user = '';
    res.redirect('/');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

//user MODEL
const User = require('../models/User')

router.get('/login', (req, res) => res.render('login'));

router.get('/register', (req, res) => res.render('register'));

// Register Handle
router.post('/register', (req, res) => {
    const { email, password } = req.body;
    let errors = [];

    // Check required fields
    if(!email || !password) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            email,
            password
        })
    } else {
        //Validation passed
        User.findOne({ email: email })
            .then(user => {
                if(user) {
                    errors.push({ msg: 'Email is already registered' });
                    res.render('register', {
                        errors,
                        email,
                        password
                    });
                } else {
                    const newUser = new User({
                        email,
                        password
                    });

                    // Hash Password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            // Set password to hashed
                            newUser.password = hash;
                            // Save user
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered');
                                    res.redirect('/users/login');
                                })
                                .catch(err => console.log(err));

                    }))
                }
            })
    }

});



router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

//Logout handle
router.get ('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;
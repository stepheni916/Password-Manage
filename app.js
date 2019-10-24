const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

require('./config/passport')(passport);




//DB CONFIG
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose
    .connect(
        db, 
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/public', express.static('public'));

app.use(express.static(__dirname + '/public'));

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// passport middlewear 
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global Vars
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Sever started on port ${PORT}`));
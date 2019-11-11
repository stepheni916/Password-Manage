const mongoose = require('mongoose');



const PasswordSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true

    },

    password: {

        type: String,

        required: true

    },

    user: {

        type: Schema.Types.ObjectId,

        default: Date.now

    }

});



const Password = mongoose.model('Password', PasswordSchema);



module.exports = Password;



const express = require('express');

const router = express.Router();

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
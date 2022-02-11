module.exports = (function(){
    'use strict';
    const path = require('path')
    const route = require('express').Router();
    const mongoose = require('mongoose')

    const link_model = require('./../models/link.js')

    route.get('/api', async function(req, res) {
        // lol
        res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    });

    return route
})();
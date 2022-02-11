module.exports = (function(){
    'use strict';
    const path = require('path')
    const route = require('express').Router();

    route.get('/link/:id', (req, res) => {
        res.sendFile(path.resolve(__dirname + '/../public/404.html'))
    });

    return route
})();
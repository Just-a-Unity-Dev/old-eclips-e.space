module.exports = (function(){
    'use strict';
    const route = require('express').Router();

    route.get('*', (req, res) => {
        res.sendFile(__dirname + '../public/index.html')
    });

    return route
})();
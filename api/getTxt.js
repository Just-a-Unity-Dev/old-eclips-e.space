module.exports = (function(){
    'use strict';
    const fs = require('fs');
    const path = require('path');
    const route = require('express').Router();

    const txtDir = path.join(__dirname, '../public/txt');

    route.get('/api/txt', async function(req, res) {
        let shutup = [];
        fs.readdir(txtDir, (err, files) => {
            files.forEach(file => {
                shutup.push({file: file, path: `/txt/${file}`, data: fs.readFileSync(path.join(txtDir, file), 'utf8')});
            })
            res.json({
                "status": 200,
                "message": "Success",
                "data": shutup
            })
        })
    });

    return route
})();
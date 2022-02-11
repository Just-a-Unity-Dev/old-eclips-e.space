module.exports = (function(){
    'use strict';
    const route = require('express').Router();
    const mongoose = require('mongoose')

    const link_model = require('../models/link.js')

    route.get('/api/link/:id', async function(req, res) {
        const id = req.params.id;
        console.log("Hi")
        console.log(id)
        if (!id) {
            res.status(418).json({
                "status": 418,
                "message": "I'm a teapot"
            })
        }
        const mod = null
        try {
            mod = await link_model.findOne({label: toString(id)})
            res.status(200).json({"status": 200})
        }catch(err){
            res.status(404).json({
                "status": 404,
                "message": "Not found"
            })
            return;
        }
        
        /*
        console.log(mod)
        //res.redirect(mod.link)
        */
    });

    route.post('/api/link/', async function(req, res) {
        const body = req.body;

        if (!body) {
            res.status(418).json({
                "status": 418,
                "message": "I'm a teapot"
            })
        }
        const mod = new link_model(body);
        mod.save().then(() => {
            console.log("saved")
        }).catch(err => {
            console.log(err)
        });
    });

    return route
})();
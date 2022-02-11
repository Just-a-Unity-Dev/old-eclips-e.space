module.exports = (function(){
    'use strict';
    const path = require('path')
    const route = require('express').Router();
    const mongoose = require('mongoose')

    const link_model = require('../models/link.js')

    route.get('api/link/:id', async function(req, res) {
        const { id } = req.params;
        if (!id) {
            res.status(418).json({
                "status": 418,
                "message": "I'm a teapot"
            })
        }
        const mod = await link_model.findOne({label: id})

        if (!mod) { /*if no such link exists*/  return res.status(404)}
        res.redirect(mod.link)
    });

    route.post('api/link/', async function(req, res) {
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
            res.redirect(body.link)
        }).catch(err => {
            console.log(err)
        });
    });

    return route
})();
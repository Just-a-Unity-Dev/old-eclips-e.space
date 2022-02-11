module.exports = (function(){
    'use strict';
    const crypto = require('crypto');
    const route = require('express').Router();
    const account = require('../models/account');

    route.post('/api/accounts/register', (req, res) => {
        const body = req.body;

        const salt = crypto.randomBytes(16).toString("hex")

        const username = body["username"];
        const password = crypto.scryptSync(body["password"], salt, 64).toString("hex");
        const bio = body["bio"];
        const profile_pic = body["profile_pic"];

        const whitelist = /a-Z0-9\.\_\-/

        if (body["password"].length < 8) {
            console.log("password too short")
            return res.status(400).json({error: "Password must be at least 8 characters long"});
        }

        if (username.length < 3) {
            console.log("username too short")
            return res.status(400).json({error: "Username must be at least 3 characters long"});
        }

        if (whitelist.test(username) === true) {
            console.log("username contains invalid characters")
            return res.status(400).json({error: "Nice attempt at an XSS, but your username contains invalid characters"});
        }

        const x = {username: username, password: `${salt}:${password}`, bio: bio, profile_pic: profile_pic, salt: salt};

        try {
            const user = account.init()
            .then(() => new account(x).save());
            console.log('User created');
            return res.status(201).send(user);
        }catch(e){
            console.log(e);
            return res.status(500).json({
                error: e
            })
        }
    });

    route.get('/api/accounts/login', async (req, res) => {
        const body = req.body;

        function hash(password){
            const salt = crypto.randomBytes(16).toString("hex");

            const hash = crypto.scryptSync(password, salt, 64).toString("hex");
            
            return `${salt}:${hash}`;
        }

        const password = hash(body["password"]);

        const [ salt, key ] = password.split(":");
        const [ username ] = body["username"]
        const hashedBuffer = crypto.scryptSync(password, salt, 16)

        const keyBuffer = Buffer.from(key, 'hex');
        const match = crypto.timingSafeEqual(hashedBuffer, keyBuffer)

        if (match) {
            console.log("login successful")
            const acc = await account.findOne({username: username});
            console.log(acc)
            if (acc != null) {
                return res.send(200);
            }
        }
        return res.send(401);
    });

    return route
})();
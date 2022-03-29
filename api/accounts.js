const { addListener } = require('../models/account');

module.exports = (function(){
    'use strict';
    const crypto = require('crypto');
    const route = require('express').Router();
    const account = require('../models/account');

    const cors = require('cors');

    route.post('/api/accounts/register', async function(req, res) {
        const body = req.body;

        const salt = crypto.randomBytes(16).toString("hex")

        const username = body["username"];
        const password = crypto.scryptSync(body["password"], salt, 64).toString("hex");
        const bio = body["bio"];
        const profile_pic = body["profile_pic"];

        const whitelist = /^[a-zA-Z0-9\.\_\-]*$/

        if (body["password"].length < 8) {
            console.log("password too short")
            return res.status(400).json({error: "Password must be at least 8 characters long"});
        }

        if (username.length < 3) {
            console.log("username too short")
            return res.status(400).json({error: "Username must be at least 3 characters long"});
        }

        if (whitelist.test(username) == false) {
            console.log("username contains invalid characters")
            return res.status(400).json({error: "Your username contains invalid characters"});
        }

        const x = {username: username, password: `${salt}:${password}`, bio: bio, profile_pic: profile_pic, salt: salt};

        try {
			const find = await account.findOne({username: username})

			if (find == null) {
				const user = account.init()
				.then(() => new account(x)
				.save());
				console.log('User created');
				return res.status(201).send(user);
			} else {
				console.log(find)
				console.log('User already exists');
				return res.status(400).json({error: "User already exists", status: 400});
			}

        }catch(e){
            console.log(e);
            return res.status(500).json({
                error: e
            })
        }
    });

    route.post('/api/accounts/login', async (req, res) => {
        const body = req.body;
        const username = body["username"]
        let password = body["password"]

        function hash(password) {
            const salt = crypto.randomBytes(16).toString("hex");
            const hash = crypto.scryptSync(password, salt, 64).toString("hex");
            return `${salt}:${hash}`;
        }
		
		const [salt, key] = password.split(':');
		const hashedBuffer = crypto.scryptSync(body["password"], salt, 64);

		const keyBuffer = Buffer.from(key, 'hex');
		const match = crypto.timingSafeEqual(hashedBuffer, keyBuffer)

        if (match){
			console.log("Matched and logged in!")
			console.log(match)
			return res.status(200).json()
        }else{
			console.log("Match failed!")
			console.log(match)
            return res.status(401).json({error: "Invalid username or password", status: 401})
        }
    });

    return route
})();
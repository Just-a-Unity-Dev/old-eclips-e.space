const { addListener } = require('../models/account');

module.exports = (function(){
    'use strict';
    const crypto = require('crypto');
    const route = require('express').Router();
    const account = require('../models/account');
	const { validate, generate_session } = require('./account_utils');

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

        const x = {username: username, password: `${salt}:${password}`, bio: bio, profile_pic: profile_pic, hearts: 0};

        try {
			const find = await account.findOne({username: username})

			if (find == null) {
				const user = account.init()
				.then(() => new account(x)
				.save());
				console.log('User created');
				return res.status(201).send({message: "Success! User created"});
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

	route.post('/api/accounts/user/:username', async (req, res) => {
		// get data from username in database, excluding sensitive data
		const username = req.params.username;
		const user = await account.findOne({username: username});
		if (user == null) {
			return res.status(404).json({error: "User not found", status: 404});
		}
		const data = {username: user.username, bio: user.bio, profile_pic: user.profile_pic, hearts: user.hearts};
		return res.status(200).json(data);
	})

    route.post('/api/accounts/login', async (req, res) => {
        const body = req.body;
        const username = body["username"]
        let password = body["password"]
		// Password is passed by client
		const user = await account.findOne({username: username})

		const match = validate(password,user.password)

        if (match){
			console.log("Passwords matched, sending new session cookie!")
			return res.status(200).json({cookie: `${user.password.split(':')[0]}:${user.password.split(':')[1]}`, status: 200})
        }else{
			console.log("Match failed!")
			console.log(match)
            return res.status(401).json({error: "Invalid username or password", status: 401})
        }
    });

    return route
})();
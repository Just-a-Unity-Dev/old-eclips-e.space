const { Schema, model } = require("mongoose");

module.exports = model('account', new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            default: "No bio yet..",
        },
        profile_pic: {
            type: String,
            default: "./eclipsespace_logo.png"
        },
		hearts: {
            type: Number,
            default: 0
        },
		hearted: {
			type: [Number],
			default: []
		},
		join_date: {
			type: Number,
			default: () => new Date(+new Date() + 7*24*60*60*1000)
		}
    },{
        collection: "accounts"
    })
);
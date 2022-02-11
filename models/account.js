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
            default: "https://eclips-e.space/eclipsespace_logo.png"
        }   
    },{
        collection: "accounts"
    })
);
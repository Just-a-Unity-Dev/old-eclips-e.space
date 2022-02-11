const { Schema, model } = require("mongoose");

module.exports = model('link', new Schema({
        label: {
            type: String,
            required: true,
            unique: true
        },
        link: {
            type: String,
            required: true,
            unique: true
        }
    },{
        collection: "links"
    })
);
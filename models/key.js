const { Schema, model } = require("mongoose");

module.exports = model('key', new Schema({
        api_key: {
            type: String,
            required: true,
            unique: true
        }
    },{
        collection: "keys"
    })
);
var mongoose = require("mongoose");

var Chat = new mongoose.Schema({

    name:String,
    time: Date,
    messageId: Number,
    message:[String],
    toId:Number,
    to:[String]

});

module.exports = mongoose.model("Chat", Chat);
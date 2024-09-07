const mongoose = require("mongoose");

const visitorsSchema = new mongoose.Schema({
    ipAddress: {
        type: String,
    },
    deviceType: {
        type: String,
    },
    urlId: {
        type: String,
    },
    userAgent: {            //Track the visit (timestamp, user agent, IP address etc.) in a database
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model("Visitors", visitorsSchema);
const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    code: {
        type: String,
    },
    expiryDate: {
        type: Date,
    },
})


module.exports = mongoose.model("Url", urlSchema);
const mongoose = require("mongoose");

const connectDb = async() =>{
    try
    {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");
    }
    catch(err)
    {
        console.log("DB Connnection Failed",err);
    }
}

module.exports = { connectDb }
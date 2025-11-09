const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(){
    // mongodb+srv://sami:root@digitomize.lpqpv.mongodb.net/
    await mongoose.connect('mongodb://localhost:27017/Digitomize', {
        useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    .then(()=> console.log("Now you are connected to Codinova backend"))
    .catch((error)=>{
        console.log(error.message)
        process.exit(1);
    });
    
}

module.exports = dbConnect;
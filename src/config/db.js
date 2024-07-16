const mongoose = require('mongoose');

const connectDb = async() => {
    try{
        mongoose.connect(process.env.MONGO_URI,
            {
                useNewURLParser: true,
                useUnifiedTopology: true
            });
    
            console.log("MongoDb connected Successfully");
    }
    catch{
        console.error("Error in MongoDb connection");
        console.log(err.message);
    }
}

module.exports = connectDb;
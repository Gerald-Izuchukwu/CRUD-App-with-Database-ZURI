const mongoose = require('mongoose');
require('dotenv').config();
const { mongo_URI} = process.env;

const connectDB = async ()=>{
    try {
        await mongoose.connect(mongo_URI, {
            useCreateIndex : true,
            useUnifiedTopology :true,
            useNewUrlParser : true,
            useFindAndModify : false

    })
    console.log('Mongodb connected')
    
    } catch (error) {
        console.log(error.message)

        process.exit(1)
        
    }
}

module.exports = connectDB
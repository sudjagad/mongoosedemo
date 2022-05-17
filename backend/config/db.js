const mongoose= require('mongoose')
require('dotenv').config()

const connectDB = async() =>{
    try{
        console.log("URL", process.env.MONGO_CONN)
        //"mongodb://localhost:27017/test"
        const conn= await mongoose.connect(process.env.MONGO_CONN)

        console.log('Database connected successfully.')
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports= connectDB
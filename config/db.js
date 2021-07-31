const mongoose = require('mongoose')
const DBConnect = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology : true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true
        })
        console.log(`DB Connected ${conn.connection.host}`)
    }
    catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = DBConnect
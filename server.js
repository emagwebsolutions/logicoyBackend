require('dotenv').config({path: "./config.env"})
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const errorHandler = require("./error/error")
const DBConnect = require('./config/db')

app.use(express.urlencoded({extended:false}));
app.use(express.json())

DBConnect()

app.use("/api/private", require('./router/private'))
app.use("/api/public", require('./router/public'))

app.get('/', (req,res)=>{
    res.send('Server is running')
})

app.use(errorHandler)
const PORT = process.env.PORT || 5000
const server = app.listen(PORT, ()=>{
    console.log('Server running on PORT '+PORT)
})

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
});
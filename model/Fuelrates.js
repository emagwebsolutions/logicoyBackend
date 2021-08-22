const mongoose = require('mongoose')

const Fuelrates = new mongoose.Schema({
    litre: Number,
    fuelstation: String,
    rate: String
},
{ timestamps: true },)

const fuel = mongoose.model('Fuelrates', Fuelrates)
module.exports = fuel
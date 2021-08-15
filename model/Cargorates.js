const mongoose = require('mongoose')

const Cargorates = new mongoose.Schema({
    owner: String,
    type: String,
    destination: String,
    rate: String
},
{ timestamps: true },)

const cargo = mongoose.model('Cargorates', Cargorates)
module.exports = cargo
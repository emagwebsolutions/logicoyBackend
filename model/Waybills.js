const mongoose = require('mongoose')

const WaybillsSchema = new mongoose.Schema({
       fullname: String,
       customer: String,
       transporter: String,
       tcontact: String,
       bags: String,
       type: String,
       type2: String,
       cargo_rate: String,
       trans_cost: String,
       destination: String,
       trucknumber: String,
       driver: String,
       dcontact: String,
       license: String,
       fuelstation: String,
       fuel: String,
       fuel_rate: String,
       fuel_cost: String,
       date: Date,
       payment: {type: String, default:0},
       tax: {type: String, default:0},
       createdby: String
},
{ timestamps: true },)


const waybill = mongoose.model('Waybills', WaybillsSchema)
module.exports = waybill
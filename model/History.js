const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
    user: String,
    activity: String,
    activityid: String
},
{ timestamps: true },)

const hist = mongoose.model('History', HistorySchema)
module.exports = hist
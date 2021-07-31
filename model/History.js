const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    user: String,
    activity: String,
    activityid: String
})

const hist = mongoose.model('History', HistorySchema)
module.exports = hist
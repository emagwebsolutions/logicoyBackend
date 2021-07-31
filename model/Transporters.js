const mongoose = require('mongoose')

const TransportersSchema = new mongoose.Schema({
    transporter: {
        type: String,
        required: [true,"Transporter field required!"]
    },
    tcontact: {
        type: String,
        required: [true,"Transporter contact field required!"],
        minlength: 10
    },
    date: {
        type: Date,
        default: Date.now
    },
    creatorid: String,
    createdby: String,
    creatorphone: String
})

TransportersSchema.methods.capitalize = function(){
    this.transporter = this.transporter.toUpperCase()
}

TransportersSchema.methods.getid = function(){
    return this._id 
}

const transporters = mongoose.model('Transporters', TransportersSchema)
module.exports = transporters
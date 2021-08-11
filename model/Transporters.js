const mongoose = require('mongoose')

const TransportersSchema = new mongoose.Schema({
    transporter: {
        type: String,
        required: [true,"Transporter field required!"]
    },
    email: {
        type: String
      },
    tcontact: {
        type: String,
        required: [true,"Transporter contact field required!"],
        minlength: 10
    },
    tcontacttwo: {
        type: String,
        minlength: 10
    },
    tcontactthree: {
        type: String,
        minlength: 10
    },
    contactp: {
        type: String
    },
    contactptwo: {
        type: String
    },
    contactpthree: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    creatorid: String,
    createdby: String,
    creatorphone: String
},
{ timestamps: true },)

TransportersSchema.methods.capitalize = function(){
    this.transporter = this.transporter.toUpperCase()
}

TransportersSchema.methods.getid = function(){
    return this._id 
}

const transporters = mongoose.model('Transporters', TransportersSchema)
module.exports = transporters
const mongoose = require('mongoose')

const TruckSchema = new mongoose.Schema({
    tcontact: {
        type: String,
        required: [true,"Transporter contact field required!"]
    },
    transporter: {
        type: String,
        required: [true,"Transporter field required!"]
    },
    trucknumber: {
        type: String,
        required: [true,"Truck number field required!"]
    },
    creatorid: String,
    createdby: String,
    creatorphone: String
},
{ timestamps: true },
)

TruckSchema.methods.capitalize = function(){
    this.transporter = this.transporter.toUpperCase()
}

TruckSchema.methods.getid = function(){
    return this._id 
}

const Trucks = mongoose.model('Trucks', TruckSchema)
module.exports = Trucks
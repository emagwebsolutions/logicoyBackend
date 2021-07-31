const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema({
    dcontact: {
        type: String,
        required: [true,"Driver name field required!"],
        minlength: 10
    },
    driver: {
        type: String,
        required: [true,"Client name field required!"]
    },
    license: {
        type: String,
        require: [true,"Driver License field required!"]
    },
    transporter: {
        type: String,
        required: [true,"Transporter field required!"]
    },
    tcontact: {
        type: String,
        required: [true,"Transporter contact field required!"],
        minlength: 10
    },
    trucknumber: {
        type: String,
        required: [true,"Truck number field required!"]
    },
    date: {
        type: Date,
        default: Date.now
    },
    creatorid: String,
    createdby: String,
    creatorphone: String
})

DriverSchema.methods.capitalize = function(){
    this.transporter = this.transporter.toUpperCase()
}

DriverSchema.methods.getid = function(){
    return this._id 
}

const drivers = mongoose.model('Drivers', DriverSchema)
module.exports = drivers
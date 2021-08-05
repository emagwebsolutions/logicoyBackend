const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true,"Client name field required!"]
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
    bags: {
        type: String,
        required: [true,"Bags field must be a number!"]
    },
    destination: {
        type: String,
        required: [true,"Destination field required!"]
    },
    trucknumber: {
        type: String,
        required: [true,"Truck number field required!"]
    },
    driver: {
        type: String,
        required: [true,"Client name field required!"]
    },
    dcontact: {
        type: String,
        required: [true,"Driver name field required!"],
        minlength: 10
    },
    license: {
        type: String,
        require: [true,"Driver License field required!"]
    },
    fuel: {
        type: String
    },
    fuelstation: {
        type: String
    },
    date: {
        type: Date,
        require: [true,"Date field required!"]
    },
    approved: {
        type: String,
        default: "No"
    },
    creatorid: String,
    createdby: String,
    creatorphone: String
})

JobsSchema.methods.capitalize = function(){
    this.transporter = this.transporter.toUpperCase()
}

JobsSchema.methods.getid = function(){
    return this._id 
}

const job = mongoose.model('Jobs', JobsSchema)
module.exports = job
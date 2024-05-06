const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    email: String,
    password: String
})

const CustomerModel = mongoose.model("customers", CustomerSchema)
module.exports = CustomerModel
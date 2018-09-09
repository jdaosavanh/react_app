const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//Customers is the name of the module from the db
module.exports = Customer  = mongoose.model('customers', CustomerSchema);
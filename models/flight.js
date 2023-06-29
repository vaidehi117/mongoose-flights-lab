const mongoose = require('mongoose');
//Optional shortcut to the mongoose.schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
});
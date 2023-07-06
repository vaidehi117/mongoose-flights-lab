const mongoose = require('mongoose');
//Optional shortcut to the mongoose.schema class
const Schema = mongoose.Schema;


//One Flight
const flightSchema = new mongoose.Schema ({
    Airline: {
      type:String,
      enum: ['American', 'Southwest', 'United', 'Spirit', 'Delta'],
      required: true,
    },
    Airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      required: true,
    },
    FlightNo: {
      type: Number,
      required: true,
      min: 0,
      max: 9999,
    },
    Departs: {
      type: Date,
      default: () => new Date(new Date().setFullYear(new Date().getFullYear()+1)),
      },
    nowBoarding: { type: Boolean, default: true }
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
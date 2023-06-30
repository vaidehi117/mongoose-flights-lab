const mongoose = require('mongoose');
//Optional shortcut to the mongoose.schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {
      type:String,
      enum: ['American', 'Southwest', 'United', 'Spirit', 'Delta'],
      // required: true,
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      // required: true,
    },
    flightNo: {
      type: Number,
      min: 0,
      max: 9999,
      default: 0,
      // required: true
    },
    departs: {
      type: Date,
      default: function() {
        return new Date().getFullYear();
      },
      min: 2024
    },
    // departs: {
    //   type: Date,
    //   default: function () {
    //     const oneYearFromNow = new Date();
    //     oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    //     return oneYearFromNow;
    //   },
    nowBoarding: { type: Boolean, default: true }
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
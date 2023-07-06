const mongoose = require('mongoose');
//Optional shortcut to the mongoose.schema class
const Schema = mongoose.Schema;


// ONE MOVIE HAS MANY REVIEWS 
// A REVIEW BELONGS TO A MOVIE
// is the relationship for the reviews and movies

// if your embedding, you always
// write the many (side) schema (reviews) 
// in the One side (in this case movie)
const destinationSchema = new Schema({
  Airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true
  },
  Arrival: {
    type: Date,
  }
}, {
  timestamps: true
});

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
    destinations: [destinationSchema],
    nowBoarding: { type: Boolean, default: true }
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
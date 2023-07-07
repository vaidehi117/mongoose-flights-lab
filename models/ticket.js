const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {type: Number },
    flight: {type: mongoose.Schema.Types.ObjectId, ref: 'flightSchema'}
  }, {
    timestamps: true
  });
module.exports = mongoose.model('Ticket', ticketSchema);
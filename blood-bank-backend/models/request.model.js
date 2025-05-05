const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  patientName: String,
  bloodTypeNeeded: String,
  location: String,
  contactNumber: String,
  urgency: String
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);

const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: String,
  bloodType: String,
  phone: String,
  location: String,
  lastDonationDate: Date
}, { timestamps: true });

module.exports = mongoose.model('Donor', donorSchema);

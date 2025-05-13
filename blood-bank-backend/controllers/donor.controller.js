const Donor = require('../models/donor.model');

exports.createDonor = async (req, res) => {
  const { name, email, bloodGroup, location, contactNumber } = req.body;
  try {
    const donor = await Donor.create({
      name,
      email,
      bloodGroup,
      location,
      contactNumber
    });
    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

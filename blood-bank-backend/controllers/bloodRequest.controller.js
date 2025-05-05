const BloodRequest = require('../models/bloodRequest.model');
const User = require('../models/user.model');

// Patient requests blood
exports.createRequest = async (req, res) => {
  const { patientId, bloodGroup, location, contactNumber } = req.body;

  try {
    const patient = await User.findById(patientId);
    if (!patient || patient.role !== 'patient') {
      return res.status(403).json({ message: 'Only patients can request blood' });
    }

    const newRequest = await BloodRequest.create({
      patientId,
      patientName: patient.name,
      bloodGroup,
      location,
      contactNumber
    });

    res.status(201).json({ message: 'Blood request created', request: newRequest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin or future use: get all requests
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await BloodRequest.find().populate('patientId', 'name email');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

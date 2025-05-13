const Request = require('../models/request.model');

exports.createRequest = async (req, res) => {
  const { email, age, bloodGroup, reason, quantity, address, phone, description } = req.body;
  
  try {
    const request = await Request.create({
      email,
      age,
      bloodGroup,
      reason,
      quantity,
      address,
      phone,
      description
    });
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const express = require('express');
const router = express.Router();
const {
  createRequest,
  getAllRequests
} = require('../controllers/bloodRequest.controller');

// Create a blood request
router.post('/', createRequest);

// View all requests (admin or future listing)
router.get('/', getAllRequests);

module.exports = router;

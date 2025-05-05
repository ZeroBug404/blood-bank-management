const express = require('express');
const router = express.Router();
const { createDonor, getDonors } = require('../controllers/donor.controller');

router.post('/', createDonor);
router.get('/', getDonors);

module.exports = router;

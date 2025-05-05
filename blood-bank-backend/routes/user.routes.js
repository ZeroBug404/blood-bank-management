const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getAllUsers,
  promoteToDonor,
} = require("../controllers/user.controller");

// Public
router.post("/register", register);
router.post("/login", login);

// Admin only (no JWT for now, so assume frontend hides these if not admin)
router.get("/", getAllUsers); // GET /api/users?role=donor
router.patch("/:id/promote", promoteToDonor); // PATCH /api/users/123/promote

module.exports = router;

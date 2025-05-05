const User = require('../models/user.model');

// Register new user
exports.register = async (req, res) => {
  const { name, email, password, role = 'patient' } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already exists' });

    const user = await User.create({ name, email, password, role });
    res.status(201).json({ message: 'Registered successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all users (admin only)
exports.getAllUsers = async (req, res) => {
  const { role } = req.query; // optional filtering
  try {
    const query = role ? { role } : {};
    const users = await User.find(query).select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Promote patient to donor (admin only)
exports.promoteToDonor = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, { role: 'donor' }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User promoted to donor', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

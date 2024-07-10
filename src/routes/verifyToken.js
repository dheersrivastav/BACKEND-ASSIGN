const express = require('express');
const router = express.Router();
const admin = require('../config/firebaseConfig');

router.post('/verifyToken', async (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (!decodedToken.email_verified) {
      return res.status(401).json({ message: 'Email not verified' });
    }

    res.status(200).json({ message: 'Token is valid and email is verified', decodedToken });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token', error: error.message });
  }
});

module.exports = router;

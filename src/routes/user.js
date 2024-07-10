const express = require('express');
const router = express.Router();
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');

router.get('/user', verifyTokenMiddleware, (req, res) => {
  res.json({ message: 'This is protected user data', user: req.user });
});

module.exports = router;

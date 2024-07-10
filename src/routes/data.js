const express = require('express');
const router = express.Router();
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');

router.get('/data', verifyTokenMiddleware, (req, res) => {
  res.json({ message: 'This is protected data', user: req.user });
});

module.exports = router;

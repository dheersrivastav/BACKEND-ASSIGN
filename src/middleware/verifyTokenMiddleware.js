const admin = require('../config/firebaseConfig');

const verifyTokenMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token is required' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (!decodedToken.email_verified) {
      return res.status(403).json({ message: 'Email not verified' });
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token', error: error.message });
  }
};

module.exports = verifyTokenMiddleware;


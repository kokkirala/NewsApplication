require('dotenv').config(); // Load environment variables

const validateRequest = (req, res, next) => {
  const apiKey = req.headers['api-key'];
  
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Access denied' }); // Generic error message
  }
  
  next();
};

module.exports = validateRequest;

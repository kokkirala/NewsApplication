const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();
const dbUri = process.env.MONGODB_URI;
const app = express();
const newsRoutes = require('./routes/news');
const validateRequest = require('./validateRequest');
const apiKey = process.env.NEWS_API_KEY; 
app.use(validateRequest); // Apply globally
;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // The frontend's origin
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(dbUri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Sample API Route
// app.get('/', (req, res) => {
//   res.send('Backend is working!');
// });

// Mock news content for demonstration purposes (Replace this with actual DB call)

// API Routes
app.get('/api/news', async (req, res) => {
  const searchQuery = req.query.search || '';
  const newsUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`;

  try {
    const response = await axios.get(newsUrl);
    res.json(response.data.articles); // Send articles data to the frontend
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: 'Error fetching news' });
  }
});

// Update content
app.post('/api/updateContent', (req, res) => {
  const newContent = req.body;

  if (!newContent.title || !newContent.description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  // Simulating updated content
  const updatedContent = {
    title: newContent.title,
    description: newContent.description,
  };

  // Responding with the updated content
  return res.status(200).json({
    message: "Content updated successfully!",
    updatedContent: updatedContent,  // Send updated content back in the response
  });
});


app.use('/api/news', newsRoutes);
app.use('/api/updateContent',newsRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

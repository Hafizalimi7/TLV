// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

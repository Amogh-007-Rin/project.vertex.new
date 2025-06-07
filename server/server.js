const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Add middleware
app.use(cors());
app.use(express.json());

// Add a simple test route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the InterviewPro API' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
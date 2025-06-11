const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Existing test route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Vertex API' });
});

// ✅ New Hello World route
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import your routes
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());              // Enable CORS (Cross-Origin Resource Sharing)
app.use(bodyParser.json());   // Parse JSON request bodies

// Logging Middleware (add this after bodyParser)
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Pass the request to the next middleware or route
});
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Server is working!' });
});
// Routes
app.use('/api/auth', authRoutes);
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});


// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to serving index.html for the root route just in case
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Explicit route for pricing just to be safe
app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pricing.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`KindleWorks server running at http://localhost:${PORT}`);
});

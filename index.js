const express = require('express');
const cors = require("cors")
const path = require('path');

const app = express();

app.use(cors())
// Set the public directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));
// Enable CORS for all requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// Set up a simple route for the home page (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the GLB Model Server!');
});

// Listen on a specific port
const port = 3000; // You can change this port if needed
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

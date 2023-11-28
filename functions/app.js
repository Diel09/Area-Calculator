const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Calculate area of a square
app.post('/.netlify/functions/square', (req, res) => {
    const side = parseFloat(req.body.side);
    const area = Math.pow(side, 2);
    res.json({ shape: 'square', area });
});

// Calculate area of a rectangle
app.post('/.netlify/functions/rectangle', (req, res) => {
    const length = parseFloat(req.body.length);
    const width = parseFloat(req.body.width);
    const area = length * width;
    res.json({ shape: 'rectangle', area });
});

// Calculate area of a circle
app.post('/.netlify/functions/circle', (req, res) => {
    const radius = parseFloat(req.body.radius);
    const area = Math.PI * Math.pow(radius, 2);
    res.json({ shape: 'circle', area });
});

// Calculate area of a triangle
app.post('/.netlify/functions/triangle', (req, res) => {
    const base = parseFloat(req.body.base);
    const height = parseFloat(req.body.height);
    const area = 0.5 * base * height;
    res.json({ shape: 'triangle', area });
});

// Export the Express app and the handler separately
exports.app = app;
exports.handler = serverless(app, { binary: ['*/*'] });

const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

app.post('/square', (req, res) => {
  const side = parseFloat(req.body.side);
  const area = Math.pow(side, 2);
  res.json({ shape: 'square', area });
});

app.post('/rectangle', (req, res) => {
  const length = parseFloat(req.body.length);
  const width = parseFloat(req.body.width);
  const area = length * width;
  res.json({ shape: 'rectangle', area });
});

app.post('/circle', (req, res) => {
  const radius = parseFloat(req.body.radius);
  const area = Math.PI * Math.pow(radius, 2);
  res.json({ shape: 'circle', area });
});

app.post('/triangle', (req, res) => {
  const base = parseFloat(req.body.base);
  const height = parseFloat(req.body.height);
  const area = 0.5 * base * height;
  res.json({ shape: 'triangle', area });
});

module.exports.handler = serverless(app);

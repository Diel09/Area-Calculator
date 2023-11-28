const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.use(express.json());

router.post('/square', (req, res) => {
  const side = parseFloat(req.body.side);
  const area = Math.pow(side, 2);
  res.json({ shape: 'square', area });
});

router.post('/rectangle', (req, res) => {
  const length = parseFloat(req.body.length);
  const width = parseFloat(req.body.width);
  const area = length * width;
  res.json({ shape: 'rectangle', area });
});

router.post('/circle', (req, res) => {
  const radius = parseFloat(req.body.radius);
  const area = Math.PI * Math.pow(radius, 2);
  res.json({ shape: 'circle', area });
});

router.post('/triangle', (req, res) => {
  const base = parseFloat(req.body.base);
  const height = parseFloat(req.body.height);
  const area = 0.5 * base * height;
  res.json({ shape: 'triangle', area });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

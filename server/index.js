const express = require('express');
const cors = require('cors');
const bags = require('./data/bags');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(bags);
});

app.get('/api/products/:code', (req, res) => {
  const bag = bags.find(b => b.code === req.params.code);
  if (bag) {
    res.json(bag);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

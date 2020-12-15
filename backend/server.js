import express from 'express'
import Keys from '../Keys.js';
import products from './data/products.js'
import colors from 'colors';

import db from './config/db.js';


db();

const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = Keys.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running on port${PORT} in ${Keys.NODE_ENV} mode.`.brightYellow.underline.bold)
)

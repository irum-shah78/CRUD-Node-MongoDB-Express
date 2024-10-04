const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send("Hello from API");
});
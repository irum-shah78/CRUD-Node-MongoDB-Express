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

// Read Products
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// Get products by id
// app.get('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// Create Products
// app.post('/api/products', async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Update product
// app.put('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found!" });
//     }

//     const updatedProduct = await Product.findById(id);

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// Delete product
// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found!" });
//     }

//     res.stat(200).json({ message: "Product deleted successfully!" })
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose.connect("mongodb+srv://irams4812:ZY9ozlTpog77paOW@crud.vexeq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUD").then(() => {
  console.log("Connected to database!");
  app.listen(3001, () => {
    console.log("Server is running.")
  })
}).catch(() => {
  console.log("Connection failed!");
});
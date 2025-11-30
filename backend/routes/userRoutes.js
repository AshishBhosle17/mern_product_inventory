const express = require('express')
const { createProduct, getProduct, getProductById, updateProduct, deleteProduct } = require('../controller/userController');
const router = express.Router()

router.post('/products', createProduct);
router.get('/products',getProduct);
router.get('products/:id', getProductById)

router.put('/products/:id', updateProduct);
router.delete('products/:id', deleteProduct);

module.exports= router;


const express = require('express');
const productController = require('../controller/product.js');
const router = express.Router();


router
.get('/',productController.getAllProducts)
.get('/:id',productController.getProduct)
.put('/:id',productController.updateProduct)
.post('/',productController.createProduct)
.delete('/:id',productController.deleteProduct)
.patch('/:id',productController.patchProduct)

exports.router = router;
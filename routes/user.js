
const express = require('express');
const userController = require('../controller/user.js');
const router = express.Router();


router
.get('/',userController.getAllProducts)
.get('/:id',userController.getProduct)
.put('/:id',userController.updateProduct)
.post('/',userController.createProduct)
.delete('/',userController.deleteProduct)
.patch('/:id',userController.patchProduct)

exports.router = router;
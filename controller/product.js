const fs = require('fs');
const model = require('../models/product');
const Product = model.Product;
// console.log('model',model)
// console.log('product',product)

exports.getAllProducts = async (req,res) =>{
    
    try{
        const products = await Product.find({});
        res.status(201).json(products);
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.getProduct = async (req,res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
}

exports.updateProduct = async (req,res) =>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body)
        res.status(201).json(doc); 
    }catch (err) {
        console.log(err);
    }
}

exports.createProduct = async (req,res) =>{
    try{
        const product = new Product(req.body);
    
        const result = await product.save();
        console.log(result);
        res.status(201).json(result);
    }catch (err) {
        console.log(err);
        res.status(500).json({error: err.message});
    }
    
}

exports.deleteProduct = async (req,res) =>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id});
        res.status(201).json(doc);
    }catch(err){
        console.log(err);
    }
}

exports.patchProduct = async (req,res) =>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body)
        res.status(201).json(doc); 
    }catch (err) {
        console.log(err);
    }
}

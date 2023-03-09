const fs = require('fs');
// const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users;

exports.getAllProducts = (req,res) =>{
    res.send(users)
}

exports.getProduct = (req,res)=>{
    const id = +req.params.id;
    const product = users.find(p => p.id===id)
    res.json(product);
}

exports.updateProduct = (req,res) =>{
    const id = +req.params.id;
    const productIndex = users.findIndex(p => p.id===id)
    users.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();
}

exports.createProduct = (req,res) =>{
    users.push(req.body);
    res.json(req.body);
}

exports.deleteProduct = (req,res) =>{
    res.json({'type':'delete'})
}

exports.patchProduct = (req,res) =>{
    const id = +req.params.id;
    const productIndex = users.findIndex(p => p.id===id)
    const product = users[productIndex]
    users.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
}
